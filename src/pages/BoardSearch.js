import React, { Component } from 'react';
import { atlases } from '../lib/bingovista/bingovista';
import BoardCard from '../components/BoardCard';

const CHARACTER_TO_NAME = new Map();
CHARACTER_TO_NAME.set("White", "Survivor");
CHARACTER_TO_NAME.set("Yellow", "Monk");
CHARACTER_TO_NAME.set("Red", "Hunter");
CHARACTER_TO_NAME.set("Gourmand", "Gourmand");
CHARACTER_TO_NAME.set("Saint", "Saint");
CHARACTER_TO_NAME.set("Spear", "Spearmaster");
CHARACTER_TO_NAME.set("Rivulet", "Rivulet");
CHARACTER_TO_NAME.set("Artificer", "Artificer");
CHARACTER_TO_NAME.set("Sofanthiel", "Inv");
CHARACTER_TO_NAME.set("Watcher", "Watcher");

class BoardSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCharacter: '',
            player1: '',
            player2: '',
            player3: '',
            player4: '',
            boards: [],
            loading: true,
            error: null,
        };
    }

    async componentDidMount() {
        // Adapted from bingovista.js
        //	Prepare atlases
        atlases[0].img = (await import("../lib/bingovista/bvicons.png")).default;
        atlases[0].txt = (await import("../lib/bingovista/bvicons.txt")).default;
        atlases[1].img = (await import("../lib/bingovista/bingoicons.png")).default;
        atlases[1].txt = (await import("../lib/bingovista/bingoicons.txt")).default;
        atlases[2].img = (await import("../lib/bingovista/uispritesmsc.png")).default;
        atlases[2].txt = (await import("../lib/bingovista/uispritesmsc.txt")).default;
        atlases[3].img = (await import("../lib/bingovista/uiSprites.png")).default;
        atlases[3].txt = (await import("../lib/bingovista/uiSprites.txt")).default;
        atlases[4].img = (await import("../lib/bingovista/uispriteswatcher.png")).default;
        atlases[4].txt = (await import("../lib/bingovista/uispriteswatcher.txt")).default;

        function loadImage(src, dest) {
            return new Promise(function (resolve, reject) {
                var img = document.createElement("img");
                img.addEventListener("load", function () {
                    var canv = document.createElement("canvas");
                    canv.width = img.naturalWidth; canv.height = img.naturalHeight;
                    var ctx = canv.getContext("2d");
                    ctx.drawImage(img, 0, 0);
                    dest.canv = canv;
                    resolve();
                });
                img.crossOrigin = "anonymous";
                img.addEventListener("error", () => reject({ message: "Error loading image " + src + "." }));
                img.src = src;
            });
        }

        function loadJson(src, dest) {
            return fetch(src).then(function (response, reject) {
                if (!response.ok)
                    return reject(new DOMException("URL " + response.url + " error " + response.status + " " + response.statusText + ".", "NetworkError"));
                return response.text();
            }).catch((e) => {
                return Promise.reject(e);
            }).then((s) => {
                dest.frames = JSON.parse(s).frames;
            });
        }

        function loadClosure(s, d, f) {
            return f(s, d);
        }

        var loaders = [];
        for (var i = 0; i < atlases.length; i++) {
            loaders.push(loadClosure(atlases[i].img, atlases[i], loadImage));
        };
        for (var i = 0; i < atlases.length; i++) {
            loaders.push(loadClosure(atlases[i].txt, atlases[i], loadJson));
        };
        Promise.all(loaders).catch(function (e) {
            console.log("Promise.all(): failed to complete fetches. Error: " + e.message);
        });

        this.fetchBoards();
    }

    fetchBoards = async () => {
        this.setState({ loading: true, error: null });
        try {
            const response = await fetch('https://us-central1-bingo-db-57e75.cloudfunctions.net/api/boards');
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            const data = await response.json();
            this.setState({
                boards: data.boards || [],
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching boards:', error);
            this.setState({
                error: error.message,
                loading: false,
            });
        }
    };

    handleCharacterChange = (e) => {
        this.setState({ selectedCharacter: e.target.value });
    };

    handlePlayerChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    getGameValue = (obj, key) => {
        if (!obj) return null;
        const v = obj.info ? obj.info[key] : null;
        if (v && typeof v === 'object' && 'stringValue' in v) return v.stringValue;
        if (v && typeof v === 'object' && 'timestampValue' in v) return v.timestampValue;
        if (v && typeof v === 'object' && 'integerValue' in v) return v.integerValue;
        if (v && typeof v === 'object' && 'booleanValue' in v) return Boolean(v.booleanValue);
        if (v && typeof v === 'object' && 'arrayValue' in v) return v.arrayValue.values;
        return v;
    };

    calcUsage = () => {
        const usage = new Map();
        for (var board of this.state.boards) {
            const creator = this.getGameValue(board, 'author') || 'Unknown';
            const used = this.getGameValue(board, 'used') ? 1 : 0;

            if (!usage.has(creator))
                usage.set(creator, { used: 0, total: 0 });
            const stats = usage.get(creator);
            stats.total += 1;
            stats.used += used;
            usage.set(creator, stats);
        }
        return usage;
    };

    getFilteredBoards = () => {
        const { boards, selectedCharacter, player1, player2, player3, player4 } = this.state;

        var m = boards.length, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            [boards[m], boards[i]] = [boards[i], boards[m]];
        }

        let filtered = boards.filter(board => {
            if (this.getGameValue(board, 'used'))
                return false;

            if (selectedCharacter) {
                const boardCharacter = CHARACTER_TO_NAME.get(this.getGameValue(board, 'boardString').split(';')[0] || '');
                if (boardCharacter !== selectedCharacter) {
                    return false;
                }
            }

            const selectedPlayers = [player1, player2, player3, player4].filter(p => p.trim().length > 0).map(p => p.toLowerCase());
            if (selectedPlayers.length > 0) {
                const playtesters = this.getGameValue(board, 'playtesters') || [];
                const boardPlaytesters = playtesters.map(pt => pt.stringValue.toLowerCase());

                if (selectedPlayers.some(player => boardPlaytesters.some(tester => tester.includes(player))))
                    return false;
            }

            return true;
        });

        const creatorUsage = this.calcUsage();
        let maxUsed = 0;
        creatorUsage.forEach(stats => {
            if (stats.used > maxUsed)
                maxUsed = stats.used;
        });

        const result = [];
        const remaining = filtered.map((item, i) => ({
            item,
            weight: ((maxUsed - (creatorUsage.get(this.getGameValue(item, 'author') || 'Unknown').used)) + 1) * 5
        }));
        while (remaining.length > 0) {
            const totalWeight = remaining.reduce((sum, e) => sum + e.weight, 0);
            let r = Math.random() * totalWeight;

            const idx = remaining.findIndex(e => {
                r -= e.weight;
                return r <= 0;
            });

            result.push(remaining[idx].item);
            remaining.splice(idx, 1);
        }

        return result;
    };

    render() {
        const { selectedCharacter, player1, player2, player3, player4, loading, error } = this.state;
        const filteredBoards = this.getFilteredBoards();

        const characters = [
            'Monk',
            'Survivor',
            'Hunter',
            'Watcher',
            'Gourmand',
            'Artificer',
            'Rivulet',
            'Spearmaster',
            'Saint',
            'Inv'
        ];

        return (
            <div className="flex-grow">
                <div className="w-full h-32 overflow-hidden">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/bingo-db-57e75.firebasestorage.app/o/regions.png?alt=media"
                        alt="Bingo Board Banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-6 max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: 'RainWorldRodondo', fontSize: '48px' }}>Search Boards</h1>

                    {error && (
                        <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg">
                            <p className="text-red-200">{error}</p>
                        </div>
                    )}

                    <div className="mb-8 bg-gray-800 border border-gray-700 rounded-lg p-6">
                        <div className="flex flex-col">
                            <label className="mb-3">Filter by Character</label>
                            <select
                                value={selectedCharacter}
                                onChange={this.handleCharacterChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                            >
                                <option value="">-- All Characters --</option>
                                {characters.map((char) => (
                                    <option key={char} value={char}>
                                        {char}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col mt-6">
                            <h3 className="mb-3">Filter by Players</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label className="mb-2">Player 1</label>
                                    <input
                                        type="text"
                                        name="player1"
                                        value={player1}
                                        onChange={this.handlePlayerChange}
                                        placeholder="Enter player name"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="mb-2">Player 2</label>
                                    <input
                                        type="text"
                                        name="player2"
                                        value={player2}
                                        onChange={this.handlePlayerChange}
                                        placeholder="Enter player name"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="mb-2">Player 3</label>
                                    <input
                                        type="text"
                                        name="player3"
                                        value={player3}
                                        onChange={this.handlePlayerChange}
                                        placeholder="Enter player name"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="mb-2">Player 4</label>
                                    <input
                                        type="text"
                                        name="player4"
                                        value={player4}
                                        onChange={this.handlePlayerChange}
                                        placeholder="Enter player name"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center py-24">
                            <p className="text-white text-xl">Loading boards...</p>
                        </div>
                    ) : filteredBoards.length === 0 ? (
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <p className="text-gray-400">No boards found matching your filters.</p>
                        </div>
                    ) : (
                        <div>
                            <p className="text-gray-400 mb-4">{filteredBoards.length} board(s) found</p>
                            <div className="flex flex-col gap-6">
                                {filteredBoards.map((board, index) => {
                                    return <BoardCard key={index} board={board} />;
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default BoardSearch;
