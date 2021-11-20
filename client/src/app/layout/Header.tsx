import { AppBar, Toolbar, Typography, Switch } from "@mui/material";

interface Props {
    darkMode: boolean,
    onChange: () => void
}
export default function Header ({onChange, darkMode}: Props) {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">Re-Store</Typography>
                <Switch onChange={onChange} checked={darkMode}/>
            </Toolbar>
        </AppBar>
    )
}