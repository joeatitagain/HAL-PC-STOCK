function Loading () {
    return (
        <div 
            style={{
                height:"50vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}
        >
            <style>
                {`
                    @keyframes l1 {
                        to {
                            clip-path: inset(0 -34% 0 0);
                        }
                    }
                `}
            </style>
            <div 
                style={{
                    width:"60px",
                    aspectRatio:"4",
                    background: "radial-gradient(circle closest-side, #CC0000 90%, transparent) 0/calc(100%/3) 100% space",
                    clipPath:"inset(0 100% 0 0)",
                    animation:"l1 1s steps(4) infinite"
                }}
            ></div>
        </div>
    )
}

export default Loading;

