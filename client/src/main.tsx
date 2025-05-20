import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App/>
		<h1 className="text-red-200 font-bold text-3xl">Is tailwings Working?</h1>
	</React.StrictMode>
)