import React, { Component } from 'react';
import { atlases } from '../lib/bingovista/bingovista';
import BoardCard from '../components/BoardCard';

class FakeBoards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: [
                {
                    info: {
                        id: { stringValue: '0' },
                        title: { stringValue: 'Leviathan' },
                        boardString: { stringValue: "Watcher;BingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0bChGBingoDodgeLeviathanChallenge~0><0" },
                        author: { stringValue: 'Twizlet' },
                        playtesters: { arrayValue: { values: [{ stringValue: 'Twizlet' }] } },
                        used: { booleanValue: false },
                        createdAt: { timestampValue: new Date().toISOString() },
                    }
                },
                {
                    info: {
                        id: { stringValue: '1' },
                        title: { stringValue: 'Forg' },
                        boardString: { stringValue: "Watcher;random;BingoEatChallenge~System.Int32|1|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|2|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|4|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|8|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|16|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|32|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|64|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|128|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|256|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|512|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|1024|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|2048|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|4096|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|8192|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|16384|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|32768|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|65536|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|131072|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|262144|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|524288|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|1048576|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|2097152|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|4194304|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|8388608|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0bChGBingoEatChallenge~System.Int32|16777216|Amount|3|NULL><0><1><System.String|Frog|Food type|0|food><System.Boolean|false|While Starving|2|NULL><0><0" },
                        author: { stringValue: 'Gzethicus' },
                        playtesters: { arrayValue: { values: [{ stringValue: 'Gzethicus' }] } },
                        used: { booleanValue: false },
                        createdAt: { timestampValue: new Date().toISOString() },
                    }
                },
                {
                    info: {
                        id: { stringValue: '2' },
                        title: { stringValue: 'Polarcat Fake Board' },
                        boardString: { stringValue: "Watcher;LF_H01;BingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Watcher|Unlock|0|unlocks><0><0bChGBingoUnlockChallenge~System.String|Red|Unlock|0|unlocks><0><0" },
                        author: { stringValue: 'Polarcat' },
                        playtesters: { arrayValue: { values: [{ stringValue: 'Polarcat' }] } },
                        used: { booleanValue: false },
                        createdAt: { timestampValue: new Date().toISOString() },
                    }
                },
                {
                    info: {
                        id: { stringValue: '3' },
                        title: { stringValue: 'E' },
                        boardString: { stringValue: "Watcher;random;BingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoNoRegionChallenge~System.String|WORA|Region|0|regionsreal><0><0bChGBingoNoRegionChallenge~System.String|WORA|Region|0|regionsreal><0><0bChGBingoNoRegionChallenge~System.String|WORA|Region|0|regionsreal><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoNoRegionChallenge~System.String|WORA|Region|0|regionsreal><0><0bChGBingoKarmaFlowerChallenge~System.String|Any Region|Region|1|regions><System.Boolean|false|Different Regions|2|NULL><System.Boolean|false|In one Cycle|3|NULL><0><System.Int32|99|Amount|0|NULL><><0><0bChGBingoNoRegionChallenge~System.String|WORA|Region|0|regionsreal><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoNoRegionChallenge~System.String|WORA|Region|0|regionsreal><0><0bChGBingoNoRegionChallenge~System.String|WORA|Region|0|regionsreal><0><0bChGBingoNoRegionChallenge~System.String|WORA|Region|0|regionsreal><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0bChGBingoDontUseItemChallenge~System.String|DangleFruit|Item type|0|banitem><1><0><0><0" },
                        author: { stringValue: 'Flycker' },
                        playtesters: { arrayValue: { values: [{ stringValue: 'Flycker' }] } },
                        used: { booleanValue: false },
                        createdAt: { timestampValue: new Date().toISOString() },
                    }
                },
                {
                    info: {
                        id: { stringValue: '4' },
                        title: { stringValue: 'Portalpalooza' },
                        boardString: { stringValue: "Watcher;random;WatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0bChGWatcherBingoCreaturePortalChallenge~System.String|RotLoach|Creature Type|1|transport><0><System.Int32|9999|Amount|0|NULL><empty><0><0" },
                        author: { stringValue: 'GreatGameDota' },
                        playtesters: { arrayValue: { values: [{ stringValue: 'GreatGameDota' }] } },
                        used: { booleanValue: false },
                        createdAt: { timestampValue: new Date().toISOString() },
                    }
                },
                {
                    info: {
                        id: { stringValue: '5' },
                        title: { stringValue: 'Red Lizard Friends' },
                        boardString: { stringValue: "Saint;1;random;WatcherBingoNoRegionChallenge~System.String|WARA|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WARB|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WARC|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WARD|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WARE|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WARF|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WARG|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WAUA|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WBLA|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WMPA|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WORA|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WPGA|Region|0|regionsreal><0><0bChGBingoTameChallenge~System.Boolean|true|Specific Creature Type|0|NULL><System.String|RedLizard|Creature Type|1|friend><0><System.Int32|10|Amount|2|NULL><0><0><><bChGWatcherBingoNoRegionChallenge~System.String|WPTA|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WRFA|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WRFB|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WRRA|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WSKA|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WSKB|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WSKC|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WSKD|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WSSR|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WTDA|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WTDB|Region|0|regionsreal><0><0bChGWatcherBingoNoRegionChallenge~System.String|WVWA|Region|0|regionsreal><0><0" },
                        author: { stringValue: 'Pid' },
                        playtesters: { arrayValue: { values: [{ stringValue: 'Pid' }] } },
                        used: { booleanValue: false },
                        createdAt: { timestampValue: new Date().toISOString() },
                    }
                },
            ],
            loaded: false,
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
        }).then(() => {
            this.setState({ loaded: true });
        });
    }

    render() {
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
                    <h1 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: 'RainWorldRodondo', fontSize: '48px' }}>Fake Boards ({this.state.boards.length})</h1>

                    <div className="flex flex-col gap-6">
                        {this.state.boards.map((board, index) => {
                            return <BoardCard key={index} board={board} fake={true} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default FakeBoards;
