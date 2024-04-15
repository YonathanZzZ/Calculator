import {useState} from 'react';
import {Stack} from '@mui/material';
import constants from '../../../constants.jsx';
import {useNavigate} from "react-router-dom";
import TabButton from "./TabButton.jsx";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(constants.CALCULATOR_TAB);
    const navigate = useNavigate();

    const tabToPath = {
        [constants.CALCULATOR_TAB]: '/',
        [constants.HISTORY_TAB]: '/history'
    };

    const handleTabChange = (tabIndex: number) => {
        setActiveTab(tabIndex);
        navigate(tabToPath[tabIndex]);
    };

    return (
        <Stack direction="row">
            <TabButton tabId={constants.CALCULATOR_TAB} label="Calculator" activeTab={activeTab}
                       handleTabChange={handleTabChange}/>
            <TabButton tabId={constants.HISTORY_TAB} label="History" activeTab={activeTab}
                       handleTabChange={handleTabChange}/>
        </Stack>
    );
};

export default Tabs;
