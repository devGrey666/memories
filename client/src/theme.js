import {createTheme} from "@mui/material";

const fontFamily = "Poppins, sans serif";

const fontWeights = {
    bold:700,
    semiBold:500,
    regular:400,
    light:300
}

const borderRadius = "7px"

const colors = {
    primaryTextColor:"#222222",
    secondaryTextColor:"#888888",
    borderColor:"#ccc",
    mainHeadingColor:"#000000",
    formBackground:"#f8f9fa",
    buttonBackground:"#f79918",
    buttonTextColor:"#fff"
}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1440,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "uppercase",
                    fontFamily:fontFamily
                },
            },
            variants: [
                {
                    props: { variant: "whiteOutlined" },
                    style: {
                        height: "77px",
                        border: "2px solid transparent",
                        borderRadius: "30px",
                        fontFamily:fontFamily,
                        color: "#fff",
                        width: "203px",
                        fontSize:"14px",
                        letterSpacing: "0.1rem",
                        padding: "2px",
                        "@media (max-width:900px)": {
                            height: "66px",
                            width: "170px",
                            lineHeight: "21px",
                            fontSize: "16px",
                        },
                    },
                },
            ],
        },
    },
    typography: {
        h1: {
            fontFamily: fontFamily,
            fontSize: "40px",
            fontWeight: `${fontWeights.bold}`,
            "@media (max-width:1200px)": {
                fontSize: "60px",
                lineHeight: "130%",
            },
            "@media (max-width:900px)": {
                fontSize: "48px",
                lineHeight: "130%",
            },
            "@media (max-width:600px)": {
                fontSize: "32px",
            },

            "@media (max-width:400px)": {
                fontSize: "28px",
            },
        },
        h2: {
            fontFamily: fontFamily,
            fontSize: "24px",
            fontWeight: `${fontWeights.bold}`,
            "@media (max-width:900px)": {
                fontSize: "40px",
                lineHeight: "130%",
            },
            "@media (max-width:600px)": {
                fontSize: "28px",
                lineHeight: "130%",
            },
        },
        h3: {
            fontFamily: fontFamily,
            fontSize: "20px",
            letterSpacing: "0.01em",
            fontWeight: `${fontWeights.bold}`,
            "@media (max-width:1200px)": {
                fontSize: "32px",
                lineHeight: "35px",
            },
            "@media (max-width:900px)": {
                fontSize: "28px",
                lineHeight: "35px",
            },
            "@media (max-width:600px)": {
                fontSize: "26px",
            },
        },

        h4: {
            fontFamily: fontFamily,
            fontSize: "18px",
            fontWeight: `${fontWeights.bold}`,
        },

        h5: {
            fontFamily: fontFamily,
            fontSize: "14px",
            letterSpacing: "0.04em",
            fontWeight: `${fontWeights.regular}`,
            "@media (max-width:1200px)": {
                fontSize: "22px",
                fontWeight: "500",
                lineHeight: "170%",
            },
            "@media (max-width:900px)": {
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "170%",
            },
            "@media (max-width:600px)": {
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "130%",
            },
        },
        h6: {
            fontFamily: fontFamily,
            fontSize: "12px",
            fontWeight: fontWeights.light,
            "@media (max-width:900px)": {
                fontSize: "16px",
                lineHeight: "21px",
                letterSpacing: "0.0em",
            },
            "@media (max-width:600px)": {
                fontSize: "20px",
                letterSpacing: "0.0",
            },
        },
        subtitle1: {
            fontFamily: fontFamily,
            fontWeight: fontWeights.regular,
            fontSize: "18px",
            letterSpacing: "0.04em",
            color: colors.secondaryTextColor,
            "@media (max-width:900px)": {
                fontSize: "20px",
                lineHeight: "30px",
                letterSpacing: "0.04em",
            },
            "@media (max-width:600px)": {
                fontSize: "16px",
                letterSpacing: "0.04em",
            },
        },
        subtitle2: {
            fontFamily: fontFamily,
            fontWeight: "600",
            fontSize: "18px",
            color: colors.secondaryTextColor,
        },
        body2: {
            fontFamily: fontFamily,
            fontWeight: "400",
            fontSize: "16px",
            color: colors.secondaryTextColor,
        },

        body1: {
            fontFamily: fontFamily,
            fontWeight: "300",
            fontSize: "26px",
            color: colors.secondaryTextColor,
            "@media (max-width:600px)": {
                fontSize: "16px",
                letterSpacing: "0.04em",
                lineHeight: "175%",
            },
        },
        button: {
            fontFamily: fontFamily,
            fontWeight: fontWeights.semiBold,
            fontSize: "18px",
        },
        caption: {
            fontFamily: fontFamily,
            fontWeight: "400",
            fontSize: "12px",
            color: colors.secondaryTextColor,
        },
    },
})

export default theme