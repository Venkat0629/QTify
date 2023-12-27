import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import styles from "./Filters.module.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className={styles.panel}>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Filters({ filters, selectedIndex, setSelectedIndex }) {
  const handleChange = (event, newValue) => {
    setSelectedIndex(newValue);
  };

  return (
    filters.length > 0 && (
      <div className={styles.wrapper}>
        <div>
          <Tabs
            value={selectedIndex}
            onChange={handleChange}
            aria-label="Filter tabs"
            TabIndicatorProps={{
              style: { backgroundColor: "var(--color-primary)" },
            }}
          >
            {filters.map((filter, index) => (
              <Tab
                label={filter.label}
                key={filter.key}
                {...a11yProps(index)}
                className={styles.label}
                classes={{ selected: styles.selected }}
              />
            ))}
          </Tabs>
        </div>
        {filters.map((filter, index) => (
          <CustomTabPanel
            key={filter.key}
            value={selectedIndex}
            index={index}
          />
        ))}
      </div>
    )
  );
}
