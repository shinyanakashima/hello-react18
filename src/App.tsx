import foxmodel from "./assets/Fox.glb";
import "@google/model-viewer";
import "./App.css";

function App() {
	return (
		<>
			<div className='model-viewer-container'>
				{/* model-viewer本体 */}
				<model-viewer
					src={foxmodel}
					alt='Fox model'
					camera-controls
					autoplay
					ar
					ar-modes='scene-viewer quick-look webxr'
					ar-scale='auto'
					style={{ width: "100%", height: "500px" }}>
					{/* 独自ボタンを表示したい場合 */}
					<button
						slot='ar-button'
						style={{
							position: "absolute",
							bottom: "1rem",
							left: "1rem",
							padding: "0.5rem 1rem",
							backgroundColor: "#007bff",
							color: "white",
							border: "none",
							borderRadius: "4px",
							cursor: "pointer",
						}}>
						ARで見る
					</button>
				</model-viewer>
			</div>
		</>
	);
}

export default App;
