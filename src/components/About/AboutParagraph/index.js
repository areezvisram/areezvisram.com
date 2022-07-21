import React, { useEffect, useState } from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import AboutListContainer from "../../../containers/AboutListContainer";
import { School, Work, Code, EmojiObjects, Business, CheckCircle } from "@material-ui/icons";
import { List, ListItemIcon, ListItem } from "@material-ui/core";
import Icon from "../../Icon";
import { useSelector } from "react-redux";
import { serverURL } from "../../../constants/server";

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
    },

    blue: {
        color: theme.palette.secondary.main,
    },

    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        color: theme.palette.primary.contrastText,
    },

    icon: {
        color: theme.palette.primary.contrastText,
        marginRight: theme.spacing(-1),
        marginTop: theme.spacing(-1)
    }
}));

const lastLetterUnderscore = (word) => {
    // return word.charAt(0) == word.charAt(0).toUpperCase();
    return word.substr(-1) === '_';
}

const AboutParagraph = () => {
    const classes = useStyles();

    const [aboutList, setAboutList] = useState([]);
    const [error, setError] = useState(null);

    const state = useSelector((state) => state.tokenReducer);
    const token = state.items;

    useEffect(() => {
        if (!state.loading) {
            fetch(`${serverURL}/about/getList`, {
                method: 'GET',
                headers: {
                    'Access-Token': token,
                }
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then((data) => {
                    setAboutList(data.list);
                })
                .catch((error) => {
                    setError(error);
                })
        }
    }, [state.loading])

    return (
        <Box>
            <List className={classes.white} dense>
                {
                    aboutList.map((listItem) => {
                        return (
                            <ListItem alignItems="flex-start">
                                <ListItemIcon className={classes.icon}>
                                    <Icon iconType={listItem.icon} />
                                </ListItemIcon>
                                <Typography variant="h5" align="left">
                                    {listItem.sentence.split(' ').map((text) => {
                                        if (lastLetterUnderscore(text)) {
                                            return (
                                                <Typography variant="h5" align="left" display="inline" className={classes.blue}>{text.slice(0, -1) + " "}</Typography>
                                            )
                                        }
                                        else {
                                            return (
                                                <Typography variant="h5" align="left" display="inline" className={classes.white}>{text + " "}</Typography>
                                            )
                                        }
                                    })}
                                </Typography>
                            </ListItem>
                        )
                    })
                }
            </List>
            <AboutListContainer />
        </Box>
    )
}

export default AboutParagraph;