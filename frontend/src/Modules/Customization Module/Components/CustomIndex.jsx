import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Common/Components/Loader";
import {SketchPicker} from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import Slider from '@mui/material/Slider'
import { LayoutSession } from "../../../Context/LayoutContext";
import '../CSS/CustomIndex.css'
import { Button } from "@mui/material";
const CustomIndex = () => {
    const {LoaderOptions, setLoaderOptions} = useContext(LayoutSession) 
    const [displayColorPicker, setdisplayColorPicker] = useState(false)
    const Navigate = useNavigate()
    const getAriaValueText = (value) => {
        const valueTextMap = {
            0.5: '0.5',
            1: '1',
            1.5: '1.5',
            2: '2',
            2.5: '2.5',
            3: '3',
        };
    
        return valueTextMap[value] || `x${value}`;
    };
    return (
        <div className="Costom-Container">
            {/* Dropdown to select loader type */}
            <h1>Customize your Loader</h1>
            <div className="custom-input-container">
                <div className="input-inner">
                    <div className="select-container">
                        <select value={LoaderOptions.type} onChange={(e) => setLoaderOptions({...LoaderOptions, type:e.target.value})}>
                            <option value="ClipLoader">ClipLoader</option>
                            <option value="BarLoader">BarLoader</option>
                            <option value="BeatLoader">BeatLoader</option>
                            <option value="BounceLoader">BounceLoader</option>
                            <option value="CircleLoader">CircleLoader</option>
                            <option value="ClimbingBoxLoader">ClimbingBoxLoader</option>
                            <option value="ClockLoader">ClockLoader</option>
                            <option value="DotLoader">DotLoader</option>
                            <option value="FadeLoader">FadeLoader</option>
                            <option value="GridLoader">GridLoader</option>
                            <option value="HashLoader">HashLoader</option>
                            <option value="MoonLoader">MoonLoader</option>
                            <option value="PacmanLoader">PacmanLoader</option>
                            <option value="PropagateLoader">PropagateLoader</option>
                            <option value="PuffLoader">PuffLoader</option>
                            <option value="PulseLoader">PulseLoader</option>
                            <option value="RingLoader">RingLoader</option>
                            <option value="RiseLoader">RiseLoader</option>
                            <option value="RotateLoader">RotateLoader</option>
                            <option value="ScaleLoader">ScaleLoader</option>
                            <option value="SkewLoader">SkewLoader</option>
                            <option value="SquareLoader">SquareLoader</option>
                            <option value="SyncLoader">SyncLoader</option>
                        </select>
                    </div>
                    <div className="color-picker-container">
                        <button className="color-picker-button" onClick={()=>{setdisplayColorPicker(displayColorPicker?false:true)}}>
                            <FontAwesomeIcon icon={faPalette} size="2x" />
                        </button>
                        {displayColorPicker && (
                            <div className="popover">
                            <div className="cover" onClick={()=>{setdisplayColorPicker(displayColorPicker?false:true)}} />
                                <SketchPicker color={LoaderOptions.color} onChange={(color) => setLoaderOptions({ ...LoaderOptions, color: color.hex })} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="Custom-Controller">
                    <div className="Controller-inner">
                        <h5>Loader Speed</h5>
                        <Slider
                            value={LoaderOptions.speedMultiplier}
                            min={0.5}
                            max={3}
                            getAriaValueText={getAriaValueText}
                            step={0.5}
                            shiftStep={0.5}
                            valueLabelDisplay="auto"
                            onChange={(e)=>{setLoaderOptions({...LoaderOptions, speedMultiplier: e.target.value})}}
                            aria-labelledby="speed-slider"
                        />
                        </div>
                    <div className="Controller-inner">
                        <h5>Loader Size</h5>
                        <Slider
                            value={LoaderOptions.size}
                            min={20}
                            max={100}
                            step={10}
                            shiftStep={10}
                            valueLabelDisplay="auto"
                            onChange={(e)=>{setLoaderOptions({...LoaderOptions, size: e.target.value})}}
                            aria-labelledby="speed-slider"
                        />
                    </div>
                </div>
            </div>
            <div className="spinner-item"> 
                <Loader />
            </div>
            <Button onClick={()=>{Navigate('/Home')}}>Home</Button>
        </div>
    );
};

export default CustomIndex;
