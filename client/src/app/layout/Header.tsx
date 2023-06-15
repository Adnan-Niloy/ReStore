import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMood: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMood, handleThemeChange}: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant="h6">
                    RE-STORE
                </Typography>
                <Switch checked={darkMood} onChange={handleThemeChange} />
            </Toolbar>
        </AppBar>
    )
}