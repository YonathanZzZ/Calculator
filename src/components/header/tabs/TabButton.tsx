import {Button} from "@mui/material";

interface TabButtonProps {
    tabId: number;
    label: string;
    activeTab: number;
    handleTabChange: Function;
}

const TabButton = ({tabId, label, activeTab, handleTabChange} : TabButtonProps) => {
    const ACTIVE_TAB_COLOR = '#95bcf2';
    const INACTIVE_TAB_COLOR = '#FFFFFF';

    return (
        <Button
            variant={activeTab === tabId ? 'contained' : 'outlined'}
            onClick={() => handleTabChange(tabId)}
            sx={{
                backgroundColor: activeTab === tabId ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR,
                color: '#000000',
                minWidth: 'fit-content',
                borderRadius: 0
            }}
        >
            {label}
        </Button>
    );
};

export default TabButton;