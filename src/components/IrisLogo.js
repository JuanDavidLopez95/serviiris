import React from 'react';

import styled from 'styled-components';

//Source: https://www.pinkdroids.com/blog/svg-react-styled-components/

const SVGIcon = styled.svg.attrs({ 
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
  })``; //end SVGIcon

  const SVGIconStyled = styled(SVGIcon)`
    width: ${ props => props.width ? props.width : "500px"};
    height: ${ props => props.height ? props.height : "500px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};
  `; //end SVGIconStyled

  const IrisLogo = ( { className, ...props }) =>  {
    return (
        <SVGIconStyled    
                id={ props.id || null } 
                className={ className }
                viewBox="0 0 5000.07 6769.05"
        >
            <title>iris-logo-purple-wslogan</title>
            <g  
                layerName="slogan"
            >
                <path   layerName="svg-path-style-1" 
                        d="M311.38,4481.15V4545H194.18v318.39H115.56V4545H0v-63.84Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M469.29,4868.63h0q-62.49,0-101.73-38.31t-39.25-102.14h0v-7.4q0-42.73,16.53-76.47t46.91-52q30.38-18.15,69.21-18.15h0q58.2,0,91.66,36.69T586.08,4715h0v31H405.32q3.63,27.82,22.18,44.62t46.77,16.8h0q43.94,0,68.54-31.72h0L580,4817.42q-17.07,24.19-46.1,37.63T469.29,4868.63Zm-8.6-233.06h0q-22.57,0-36.69,15.19t-17.87,43.55h105.5v-6.05q-.54-25.14-13.71-39T460.69,4635.57ZM2128.37,6769.05" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M938.33,4784.89h0q0-14-13.7-21.9t-44.22-14.38h0q-101.34-21.24-101.33-86h0q0-37.77,31.31-63.17t82.12-25.27h0q54,0,86.41,25.4t32.39,66.13h-75.8q0-16.26-10.48-26.88t-32.79-10.62h0q-19.23,0-29.7,8.6A27.64,27.64,0,0,0,852.05,4659h0q0,12.49,12,20.29t40.19,13.31q28.35,5.64,47.84,12.77h0q60.08,22,60.08,76.47h0q0,38.85-33.33,62.77t-86.15,24.06h0q-35.61,0-63.3-12.77t-43.41-34.81q-15.85-22.19-15.86-48h72q.93,20.3,14.92,31,13.83,10.76,37.22,10.76h0q21.78,0,32.93-8.34Q938.34,4798.34,938.33,4784.89Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M1151.76,4579.39v284h-76.07v-284Zm-80.51-73.51h0q0-17.07,11.29-28.09t31.18-11h0q19.35,0,30.91,11t11.56,28.09h0q0,17.34-11.69,28.36t-30.78,11q-19.21,0-30.91-11T1071.25,4505.88Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M1225,4579.39h71.1l2.42,31.72q30.11-37,81.57-37h0q54.84,0,75.4,43.28h0q29.84-43.28,85.34-43.28h0q46.1,0,68.68,26.88t22.58,80.91h0v181.44H1556V4682.21q0-24.06-9.41-35.21t-33.46-11.16h0q-34,0-47.18,32.53h0l.27,195h-75.93v-180.9q0-24.6-9.68-35.62t-33.06-11h0q-32.25,0-46.77,26.75h0v200.79H1225Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1"
                        d="M1956.79,4720.11v3.9q0,65.59-29.7,105.1t-80.51,39.52h0q-43,0-69.61-30h0v134h-75.8V4579.39h70.29l2.68,27.83q27.55-33.07,71.9-33.07h0q52.56,0,81.58,38.84,29.18,38.85,29.17,107.12Zm-75.8-1.61h0q0-39.65-14.11-61.15t-40.73-21.51h0q-35.75,0-49.18,27.29h0v116.25q14,28.09,49.59,28.09h0Q1881,4807.47,1881,4718.5Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M2094.68,4460.18v403.2h-76.21v-403.2Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M2247.89,4579.39v284h-76.07v-284Zm-80.64-73.51h0q0-17.07,11.42-28.09t31.18-11h0q19.37,0,30.92,11t11.55,28.09h0q0,17.34-11.69,28.36t-30.78,11q-19.21,0-30.91-11T2167.25,4505.88Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M2418,4863.38h-76.2V4635h-42.2v-55.65h42.2V4555.2q0-47.71,27.42-74.19t76.87-26.34h0q15.74,0,38.57,5.24h0l-.8,58.87a94.45,94.45,0,0,0-23.12-2.42h0q-42.73,0-42.74,40.19h0v22.84h56.45V4635H2418Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M2604.58,4579.39v284h-76.07v-284Zm-80.51-73.51h0q0-17.07,11.43-28.09t31-11h0q19.49,0,30.91,11t11.56,28.09h0q0,17.34-11.69,28.36t-30.78,11q-19.22,0-30.78-11T2524.07,4505.88Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M2796,4807.47h0q21,0,34.13-11.56t13.58-30.64h71.23a97.54,97.54,0,0,1-15.73,52.82q-15.59,24.06-42.47,37.23t-59.4,13.31h0q-60.89,0-96.09-38.71t-35.22-107h0v-5q0-65.58,35-104.7t95.82-39.11h0q53.22,0,85.48,30.24t32.66,80.78h-71.23q-.4-22-13.58-35.89t-34.67-13.71h0q-26.48,0-40.05,19.22t-13.44,62.63h0v7.93q0,43.82,13.3,62.9T2796,4807.47Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M3210.16,4863.38h-76.6q-5.25-10.22-7.66-25.4h0q-27.55,30.65-71.64,30.65h0q-41.79,0-69.21-24.2t-27.42-60.88h0q0-45.17,33.47-69.22t96.76-24.46h34.95v-16.26q0-19.76-10.22-31.45t-31.85-11.83h0q-19.22,0-30.1,9.14t-10.89,25.13H2964q0-24.59,15.19-45.56t43-32.93q28-12,62.5-12h0q52.55,0,83.32,26.35t30.91,74.18h0V4797.8q.27,40.32,11.29,61.15h0Zm-139.37-52.82h0a65.61,65.61,0,0,0,30.92-7.39q14.23-7.53,21.1-20.16h0v-48.79h-28.36q-57,0-60.75,39.38h0l-.27,4.44q0,14.25,10.08,23.39T3070.79,4810.56ZM2128.37,6769.05" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M3492.53,4460.18v403.2h-76.07v-403.2Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M3807,4863.38h-76.61q-5.23-10.22-7.66-25.4h0q-27.55,30.65-71.63,30.65h0q-41.8,0-69.22-24.2t-27.41-60.88h0q0-45.17,33.46-69.22t96.77-24.46h34.94v-16.26q0-19.76-10.22-31.45t-31.85-11.83h0q-19.08,0-30,9.14t-10.88,25.13H3560.8q0-24.59,15.19-45.56t43.14-32.93q27.82-12,62.36-12h0q52.55,0,83.46,26.35t30.78,74.18h0V4797.8q.27,40.32,11.29,61.15h0Zm-139.37-52.82h0a65.57,65.57,0,0,0,30.91-7.39q14.25-7.53,21.1-20.16h0v-48.79H3691.3q-57,0-60.61,39.38h0l-.27,4.44q0,14.25,9.94,23.39T3667.65,4810.56ZM2128.37,6769.05" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M4062.91,4579.39l52.81,191.39,52.69-191.39h79.29l-95.82,284h-72.44l-95.83-284Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M4371.88,4579.39v284h-76.07v-284Zm-80.64-73.51h0q0-17.07,11.43-28.09t31.18-11h0q19.35,0,30.91,11t11.56,28.09h0q0,17.34-11.7,28.36t-30.77,11q-19.22,0-30.91-11T4291.24,4505.88Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M4433.3,4719.31h0q0-66.41,29.84-105.78t81.44-39.38h0q41.54,0,68.54,30.92h0V4460.18h76.07v403.2h-68.54l-3.63-30.24q-28.37,35.49-73,35.49h0q-50.13,0-80.37-39.52T4433.3,4719.31Zm75.8,5.51h0q0,39.92,14,61.15t40.45,21.23h0q35.09,0,49.59-29.7h0V4665.41q-14.23-29.57-49.05-29.57h0Q4509.1,4635.84,4509.1,4724.82Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-1" 
                        d="M5000.05,4863.38h-76.74q-5.25-10.22-7.53-25.4h0q-27.55,30.65-71.77,30.65h0q-41.66,0-69.07-24.2t-27.42-60.88h0q0-45.17,33.46-69.22t96.63-24.46h35v-16.26q0-19.76-10.08-31.45t-31.85-11.83h0q-19.23,0-30.11,9.14t-10.89,25.13h-75.79q0-24.59,15.18-45.56t43-32.93q27.81-12,62.49-12h0q52.56,0,83.33,26.35t30.91,74.18h0V4797.8q.27,40.32,11.29,61.15h0Zm-139.37-52.82h0a65.57,65.57,0,0,0,30.91-7.39q14.11-7.53,21-20.16h0v-48.79H4884.2q-57,0-60.61,39.38h0l-.27,4.44q0,14.25,9.94,23.39T4860.68,4810.56Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
            </g>
            <g layerName="iris-text">
                <path   layerName="I" 
                      /*   layerName="svg-path-style-1"  */
                        d="M66.06,3835.66V1129.39H670.29V3835.66Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="r" 
                        // layerName="svg-path-style-1" 
                        d="M2134.06,1716.6h72.33v514.87h-208.5q-268.07,0-268.07,297.86h0V3835.66H1138.35V1729.36h583v302.12q34-140.43,140.42-227.65T2134.06,1716.6Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
            <g  layerName="i-2" 
                data-name="i"
            >
                <rect   layerName="svg-path-style-1" 
                        x="2491.51" 
                        y="1729.36" 
                        width="591.47" 
                        height="2106.3"
                        fill="currentColor"
                />
                <rect   layerName="svg-path-style-1" 
                        x="2478.74" 
                        y="988.97" 
                        width="617" 
                        height="459.56"
                        fill="currentColor"
                />
            </g>
                <path   layerName="s" 
                        // layerName="svg-path-style-1" 
                        d="M4355.24,3329.3h0V3091q0-55.32-25.53-78.72t-89.36-23.41H3997.81q-531.9,0-531.89-468.06h0V2201.68q0-472.32,540.4-472.32H4368q540.4,0,540.4,472.32h0v187.23H4338.22V2235.72q0-55.3-25.53-78.72t-89.36-23.4h-63.82q-63.84,0-89.36,23.4t-25.53,78.72h0V2491q0,55.32,25.53,78.72t89.36,23.41h242.54q531.89,0,531.89,463.81h0v306.37q0,472.32-540.4,472.32H4014.83q-536.14,0-536.15-472.32h0v-183h578.7V3329.3q0,106.36,110.64,106.37h72.33Q4355.25,3435.67,4355.24,3329.3Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
            </g>
            <g layerName="wings">
                <path   layerName="svg-path-style-2" 
                        d="M1814.82,919.66c-104.39-114.81-280.49-165.11-269.34-384,37.69-23.34,86-37.13,157.15-30.36-82.18-123.22-359.1-274.62-291.81-434.57,51-121.26,320.55-62.88,482.58,0C2083,144.28,2545.52,491.8,2656.46,778.16c103.62,267.48,154.08,820.61-325.42,677.13-80.44-24-202-88.67-269.34-131.39-21.41-13.61-22.49-43.65-44.9-60.65-102-77.45-262.32-109-269.31-283C1743.64,936.43,1778.38,927.24,1814.82,919.66Zm269.31,353.75c189.46,121.55,347,188.31,516.22,40.42,75.81-105.63,65.31-393,11.25-495.21-143.17-270.71-472.1-620.83-729.45-707.46-125.58-42.25-331.64-57-404-30.32-2.51,7.86-.31,20-11.21,20.2C1490.7,345.8,1760.36,423,1837.28,586.19c-86.24,4-141.52-40.67-213.23-20.23-43.34,241.44,248.81,267.54,347.89,414.37-67.73-5.87-110.89-32.81-168.33,0C1816,1133.41,1952.93,1189.18,2084.13,1273.41Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-2" 
                        d="M3846,495.18c48,17.5,126.05,7.8,157.18,40.49,7.46,212.2-152.3,273.78-269.37,373.92,17.12,25,69.72,18.08,67.36,60.65-21.47,183-100.32,175.41-258.09,293.08-128.88,96.12-515.14,350.86-684.56,111.16C2747.09,1217,2861.68,806.53,2948.27,667c159.85-257.38,527.81-526.75,707-596.29C3756.42,31.47,4077-53.88,4137.83,50.52,4229.83,208.47,3929.26,390.51,3846,495.18Zm-179.49-384C3311.88,294,2928,628.07,2892.13,1071.27c-9.88,122.92,22.52,160.79,56.14,242.56,181.91,153.27,338,74,516.22-40.42,135.56-87,273.44-147.2,280.53-293.11-53.81-42.34-118.75,12.37-168.34-10.09,112.94-131,387.53-169.52,347.89-404.28-74.82-20.82-131.86,27.15-224.48,20.23,108-172.47,377.68-252.54,370.35-495.22C3962,17.55,3797.93,109.3,3666.5,111.13Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-2" 
                        d="M2308.58,667c-123.69-94.11-186.92-242.72-336.64-313.31-86.37,11.93-18,113.66-11.22,161.72-74.16-3.95-57.85-89.42-101-121.3-6.43-46.2,27.49-56.11,33.68-90.94C2136,330.61,2226.62,494.9,2308.58,667Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-2" 
                        d="M3655.29,303.17c59,66.68,13.23,184.37-67.3,212.24,7.33-48.28,67.67-137.14,0-161.72C3423.29,414.28,3368.8,574.07,3240,667,3322,494.9,3412.67,330.61,3655.29,303.17Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-2" 
                        d="M2084.13,697.32c199.62,35.86,301.91,213.2,336.67,363.83-93.14-108.09-143.94-254.4-280.56-323.38-44.08,66.93,38.81,106.36,44.9,161.69C2122,862.11,2051.11,788.82,2084.13,697.32Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-2" 
                        d="M3464.49,697.32c36.48,91.5-41.57,154.51-89.76,202.14-23.49-48.37,70.62-77.67,44.83-161.69C3275.62,800.16,3217.67,940,3139,1061.15,3124.37,950.2,3285.09,713.79,3464.49,697.32Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-2" 
                        d="M2420.8,1253.16c-62.26-38.22-76.37-119.87-157.12-141.46-9.07,1.89-11.18,10.09-22.43,10-4.29,34.18,19.45,43.16,33.65,60.68-39.92,24.89-89.57-38.37-89.76-60.68C2183.74,984.16,2451.53,1163.15,2420.8,1253.16Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <path   layerName="svg-path-style-2" 
                        d="M3273.69,1192.57c4.51-26.32,33.5-30.51,33.68-60.68-2.11-8.17-11.28-10.07-11.21-20.16-87.43,15.53-108.31,91-157.12,141.46-58.51-68.45,209.28-269,224.41-141.46C3367.46,1145.34,3327.54,1187.32,3273.69,1192.57Z" 
                        transform="translate(0.02 0)"
                        fill="currentColor"
                />
                <rect   layerName="svg-path-style-1" 
                        x="2478.74" 
                        y="988.97" 
                        width="617"
                        height="459.56"
                        fill="currentColor"
                />
            </g>
        </SVGIconStyled>
    ); //end return statement
  }; //end IrisLogo

const IrisLogoWings = ( { className, ...props }) =>  {
        return (
                <SVGIconStyled    
                        id={ props.id || null } 
                        className={ className }
                        viewBox="0 0 5000.07 6769.05"
                >
                        <g layerName="wings">
                                <path   layerName="svg-path-style-2" 
                                        d="M1814.82,919.66c-104.39-114.81-280.49-165.11-269.34-384,37.69-23.34,86-37.13,157.15-30.36-82.18-123.22-359.1-274.62-291.81-434.57,51-121.26,320.55-62.88,482.58,0C2083,144.28,2545.52,491.8,2656.46,778.16c103.62,267.48,154.08,820.61-325.42,677.13-80.44-24-202-88.67-269.34-131.39-21.41-13.61-22.49-43.65-44.9-60.65-102-77.45-262.32-109-269.31-283C1743.64,936.43,1778.38,927.24,1814.82,919.66Zm269.31,353.75c189.46,121.55,347,188.31,516.22,40.42,75.81-105.63,65.31-393,11.25-495.21-143.17-270.71-472.1-620.83-729.45-707.46-125.58-42.25-331.64-57-404-30.32-2.51,7.86-.31,20-11.21,20.2C1490.7,345.8,1760.36,423,1837.28,586.19c-86.24,4-141.52-40.67-213.23-20.23-43.34,241.44,248.81,267.54,347.89,414.37-67.73-5.87-110.89-32.81-168.33,0C1816,1133.41,1952.93,1189.18,2084.13,1273.41Z" 
                                        transform="translate(0.02 0)"
                                        fill="currentColor"
                                />
                                <path   layerName="svg-path-style-2" 
                                        d="M3846,495.18c48,17.5,126.05,7.8,157.18,40.49,7.46,212.2-152.3,273.78-269.37,373.92,17.12,25,69.72,18.08,67.36,60.65-21.47,183-100.32,175.41-258.09,293.08-128.88,96.12-515.14,350.86-684.56,111.16C2747.09,1217,2861.68,806.53,2948.27,667c159.85-257.38,527.81-526.75,707-596.29C3756.42,31.47,4077-53.88,4137.83,50.52,4229.83,208.47,3929.26,390.51,3846,495.18Zm-179.49-384C3311.88,294,2928,628.07,2892.13,1071.27c-9.88,122.92,22.52,160.79,56.14,242.56,181.91,153.27,338,74,516.22-40.42,135.56-87,273.44-147.2,280.53-293.11-53.81-42.34-118.75,12.37-168.34-10.09,112.94-131,387.53-169.52,347.89-404.28-74.82-20.82-131.86,27.15-224.48,20.23,108-172.47,377.68-252.54,370.35-495.22C3962,17.55,3797.93,109.3,3666.5,111.13Z" 
                                        transform="translate(0.02 0)"
                                        fill="currentColor"
                                />
                                <path   layerName="svg-path-style-2" 
                                        d="M2308.58,667c-123.69-94.11-186.92-242.72-336.64-313.31-86.37,11.93-18,113.66-11.22,161.72-74.16-3.95-57.85-89.42-101-121.3-6.43-46.2,27.49-56.11,33.68-90.94C2136,330.61,2226.62,494.9,2308.58,667Z" 
                                        transform="translate(0.02 0)"
                                        fill="currentColor"
                                />
                                <path   layerName="svg-path-style-2" 
                                        d="M3655.29,303.17c59,66.68,13.23,184.37-67.3,212.24,7.33-48.28,67.67-137.14,0-161.72C3423.29,414.28,3368.8,574.07,3240,667,3322,494.9,3412.67,330.61,3655.29,303.17Z" 
                                        transform="translate(0.02 0)"
                                        fill="currentColor"
                                />
                                <path   layerName="svg-path-style-2" 
                                        d="M2084.13,697.32c199.62,35.86,301.91,213.2,336.67,363.83-93.14-108.09-143.94-254.4-280.56-323.38-44.08,66.93,38.81,106.36,44.9,161.69C2122,862.11,2051.11,788.82,2084.13,697.32Z" 
                                        transform="translate(0.02 0)"
                                        fill="currentColor"
                                />
                                <path   layerName="svg-path-style-2" 
                                        d="M3464.49,697.32c36.48,91.5-41.57,154.51-89.76,202.14-23.49-48.37,70.62-77.67,44.83-161.69C3275.62,800.16,3217.67,940,3139,1061.15,3124.37,950.2,3285.09,713.79,3464.49,697.32Z" 
                                        transform="translate(0.02 0)"
                                        fill="currentColor"
                                />
                                <path   layerName="svg-path-style-2" 
                                        d="M2420.8,1253.16c-62.26-38.22-76.37-119.87-157.12-141.46-9.07,1.89-11.18,10.09-22.43,10-4.29,34.18,19.45,43.16,33.65,60.68-39.92,24.89-89.57-38.37-89.76-60.68C2183.74,984.16,2451.53,1163.15,2420.8,1253.16Z" 
                                        transform="translate(0.02 0)"
                                        fill="currentColor"
                                />
                                <path   layerName="svg-path-style-2" 
                                        d="M3273.69,1192.57c4.51-26.32,33.5-30.51,33.68-60.68-2.11-8.17-11.28-10.07-11.21-20.16-87.43,15.53-108.31,91-157.12,141.46-58.51-68.45,209.28-269,224.41-141.46C3367.46,1145.34,3327.54,1187.32,3273.69,1192.57Z" 
                                        transform="translate(0.02 0)"
                                        fill="currentColor"
                                />
                                <rect   layerName="svg-path-style-1" 
                                        x="2478.74" 
                                        y="988.97" 
                                        width="617"
                                        height="459.56"
                                        fill="currentColor"
                                />
                        </g>
                </SVGIconStyled>
        ); //end return statement
}

  export  { IrisLogo, IrisLogoWings };