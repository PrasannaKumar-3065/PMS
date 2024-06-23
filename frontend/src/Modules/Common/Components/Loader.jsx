import React from "react";
import { ClipLoader, BarLoader, BeatLoader, BounceLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';
import { useContext } from "react";
import { LayoutSession } from "../../../Context/LayoutContext";
const Loader = () => {
    const {LoaderOptions} = useContext(LayoutSession) 
    const renderLoader = () => {
        const loaderProps = {
            color:LoaderOptions.color,
            speedMultiplier:LoaderOptions.speedMultiplier,
            size:LoaderOptions.size,
        };

        switch (LoaderOptions.type) {
            case 'ClipLoader':
                return <ClipLoader {...loaderProps} />;
            case 'BarLoader':
                return <BarLoader {...loaderProps} />;
            case 'BeatLoader':
                return <BeatLoader {...loaderProps} />;
            case 'BounceLoader':
                return <BounceLoader {...loaderProps} />;
            case 'CircleLoader':
                return <CircleLoader {...loaderProps} />;
            case 'ClimbingBoxLoader':
                return <ClimbingBoxLoader {...loaderProps} />;
            case 'ClockLoader':
                return <ClockLoader {...loaderProps} />;
            case 'DotLoader':
                return <DotLoader {...loaderProps} />;
            case 'FadeLoader':
                return <FadeLoader {...loaderProps} />;
            case 'GridLoader':
                return <GridLoader {...loaderProps} />;
            case 'HashLoader':
                return <HashLoader {...loaderProps} />;
            case 'MoonLoader':
                return <MoonLoader {...loaderProps} />;
            case 'PacmanLoader':
                return <PacmanLoader {...loaderProps} />;
            case 'PropagateLoader':
                return <PropagateLoader {...loaderProps} />;
            case 'PuffLoader':
                return <PuffLoader {...loaderProps} />;
            case 'PulseLoader':
                return <PulseLoader {...loaderProps} />;
            case 'RingLoader':
                return <RingLoader {...loaderProps} />;
            case 'RiseLoader':
                return <RiseLoader {...loaderProps} />;
            case 'RotateLoader':
                return <RotateLoader {...loaderProps} />;
            case 'ScaleLoader':
                return <ScaleLoader {...loaderProps} />;
            case 'SkewLoader':
                return <SkewLoader {...loaderProps} />;
            case 'SquareLoader':
                return <SquareLoader {...loaderProps} />;
            case 'SyncLoader':
                return <SyncLoader {...loaderProps} />;
            default:
                return null;
        }
    };

    return (
        <div>
            {renderLoader()}
        </div>
    );
};

export default Loader;
