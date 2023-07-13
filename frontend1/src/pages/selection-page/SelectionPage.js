import React from "react";
import './SelectionPage.css'

export default function SelectionPage() {
    return (
        <div className="selectionPage">
            <div className="sp-navbar">
                --------------  Navbar comes here  -----------------
            </div>
            <div className="sp-container">
                <div className="container-1">
                    <button>Use your current number</button>
                </div>
                <div className="container-1">
                    <button>Pick a virtual number</button>
                </div>
            </div>
        </div>
    )
}