import { createTheme } from "@mui/material";

const muiTheme = createTheme({
    palette: {
        primary: { main: "#362FD9" },
        secondary: { main: "#767b86" },
        error: { main: "#DC0000" },
        success: { main: "#1F8A70", light: "#BEF0CB" },
        error: { main: "#DC0000", light: "#F9B5D0"},
        mute: "#EDF1F2",
        text: { main: "#23272f" },
        yellow: { main: "#F2921D", light: "#FFFEA8" },
        purple: { main: "#5D3891", light: "#E5D1FA" }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 760,
            lg: 900,
            xl: 1200,
            "2xl": 1500
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {  
                root: `
                    @media(min-width:0px) { padding: 0 10px };
                    @media(min-width:760px){ padding: 0 20px };
                    @media(min-width:1024px) { padding: 0 30px };
                `
            },
        },
        MuiButton: {
            styleOverrides: {
                root: `
                    text-transform: capitalize;
                    @media(min-width:0px) { font-size: 13px };
                    @media(min-width 760px){ font-size: 14px };
                    @media(min-width: 900px) { font-size: 15px };
                `
            }
        }
    }
});

export default muiTheme;
