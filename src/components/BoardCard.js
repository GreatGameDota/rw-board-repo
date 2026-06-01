import React, { Component } from "react";
import BingoCanvas from '../components/BingoCanvas';

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

const CHARACTER_TO_IMG = new Map();
CHARACTER_TO_IMG.set("White", "https://static.wikitide.net/rainworldwiki/e/ed/Survivor_icon_(custom).png");
CHARACTER_TO_IMG.set("Yellow", "https://static.wikitide.net/rainworldwiki/2/29/Monk_icon_%28custom%29.png");
CHARACTER_TO_IMG.set("Red", "https://static.wikitide.net/rainworldwiki/9/98/Hunter_icon_%28custom%29.png");
CHARACTER_TO_IMG.set("Gourmand", "https://static.wikitide.net/rainworldwiki/a/a5/Gourmand_icon_%28custom%29.png");
CHARACTER_TO_IMG.set("Saint", "https://static.wikitide.net/rainworldwiki/3/33/Saint_icon_%28custom%29.png");
CHARACTER_TO_IMG.set("Spear", "https://static.wikitide.net/rainworldwiki/f/fc/Spearmaster_icon_%28custom%29.png");
CHARACTER_TO_IMG.set("Rivulet", "https://static.wikitide.net/rainworldwiki/d/dd/Rivulet_icon_%28custom%29.png");
CHARACTER_TO_IMG.set("Artificer", "https://static.wikitide.net/rainworldwiki/a/ad/Artificer_icon_%28custom%29.png");
CHARACTER_TO_IMG.set("Sofanthiel", "https://static.wikitide.net/rainworldwiki/a/ac/Inv_icon_%28custom%29.png");
CHARACTER_TO_IMG.set("Watcher", "https://static.wikitide.net/rainworldwiki/8/88/Watcher_icon_%28custom%29.png");

class BoardCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            used: false,
            loading: false
        };
    }

    getGameValue = (obj, key) => {
        if (!obj) return null;
        const v = obj.info[key];
        if (v && typeof v === 'object' && 'stringValue' in v) return v.stringValue;
        if (v && typeof v === 'object' && 'timestampValue' in v) return v.timestampValue;
        if (v && typeof v === 'object' && 'integerValue' in v) return v.integerValue;
        if (v && typeof v === 'object' && 'booleanValue' in v) return Boolean(v.booleanValue);
        if (v && typeof v === 'object' && 'arrayValue' in v) return v.arrayValue.values;
        return v;
    };

    updateBoard = async (id) => {
        this.setState({
            used: !this.state.used,
            loading: true,
            error: null
        }, async () => {
            try {
                var response = await fetch(`https://us-central1-bingo-db-57e75.cloudfunctions.net/api/board/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        used: String(this.state.used)
                    })
                });
                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }

                this.setState({
                    loading: false,
                    error: null,
                });
            } catch (error) {
                console.error('Error updating board:', error);
                this.setState({
                    error: error.message,
                    loading: false
                });
            }
        });
    }

    componentDidMount() {
        this.setState({ used: this.getGameValue(this.props.board, "used") });
    }

    render() {
        const { board } = this.props;
        return (
            <div className="flex flex-row items-center bg-gray-800 rounded-lg p-2 border border-gray-700">
                <div className="flex flex-col mb-4 w-1/2 text-center">
                    <p className="" style={{ fontFamily: "RainWorldRodondo", fontSize: "64px" }}>{this.getGameValue(board, 'title')}</p>
                    <p style={{ fontFamily: "RainWorldRodondo", fontSize: "32px" }}>by ???</p>
                    <div className="flex flex-row mx-auto w-fit">
                        <img src={`${CHARACTER_TO_IMG.get(this.getGameValue(board, "boardString").split(";")[0])}`}
                            alt="Board cat icon"
                            className="w-8 h-8 my-auto mr-4"
                            title={`${CHARACTER_TO_NAME.get(this.getGameValue(board, "boardString").split(";")[0])} board`} />
                        <p className="mb-2" style={{ fontFamily: "RainWorldRodondo", fontSize: "32px" }}>{CHARACTER_TO_NAME.get(this.getGameValue(board, "boardString").split(";")[0])} board</p>
                    </div>
                    <span style={{ border: "solid", borderWidth: "1px 0 0 0", borderColor: "#52525c", margin: "4px 0" }}></span>
                    {/* <p style={{ fontFamily: "RainWorldRodondo", fontSize: "32px" }}>Playtesters:</p> */}
                    {/* <p style={{ fontFamily: "RainWorldRodondo", fontSize: "32px" }}>{this.getGameValue(board, 'playtesters').map((name, index) => name.stringValue).join(', ')}</p> */}
                    <button
                        onClick={() => navigator.clipboard.writeText(this.getGameValue(board, "boardString"))}
                        className={`p-2 px-4 my-8 mx-auto flex flex-row w-fit text-gray-400 rounded hover:bg-gray-700 transition-colors border border-gray-700`}
                        style={{ fontFamily: "RainWorldRodondo", fontSize: "24px" }}
                    >
                        Copy Board String
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2 mt-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                        </svg>
                    </button>
                    <button
                        className={`group flex mx-auto rounded-lg overflow-hidden disabled:cursor-not-allowed border border-gray-700`}
                        onClick={() => this.updateBoard(this.getGameValue(board, "id"))}
                        style={{ fontFamily: "RainWorldRodondo", fontSize: "32px" }}
                        disabled={this.state.loading}
                        title={this.state.used ? "Board used" : "Board not used"}
                    >
                        <div className="flex items-center pb-2 px-4 bg-gray-700 group-disabled:bg-gray-900 text-white transition-colors duration-150">
                            Board Used
                        </div>

                        <div className="flex items-center justify-center w-[48px] min-h-full bg-gray-800">
                            {this.state.used ?
                                <svg width="24" height="24" viewBox="0 0 10 10" fill="none">
                                    <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            }
                        </div>
                    </button>
                </div>
                <div className="w-fit mx-auto">
                    <BingoCanvas
                        bingoString={this.getGameValue(board, "boardString")}
                        boardState={"000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000<>000000000".split("<>")}
                        team={0}
                        size={500} />
                </div>
            </div>
        );
    }
}

export default BoardCard;
