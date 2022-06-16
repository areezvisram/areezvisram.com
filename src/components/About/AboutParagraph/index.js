import React, { useEffect, useState } from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import AboutListContainer from "../../../containers/AboutListContainer";
import { School, Work, Code, EmojiObjects, Business, CheckCircle } from "@material-ui/icons";
import { List, ListItemIcon, ListItem } from "@material-ui/core";
import Icon from "../../Icon";
import { useSelector } from "react-redux";

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

const AboutParagraph = () => {
    const classes = useStyles();

    // const [aboutList, setAboutList] = useState([]);
    // const [error, setError] = useState(null);

    const state = useSelector((state) => state.tokenReducer);
    const token = state.items;

    // useEffect(() => {
    //     if(!state.loading) {
    //         fetch('http://localhost:5000/about/getList', {
    //             method: 'GET',
    //             headers: {
    //                 'Access-Token': token,                    
    //             }
    //         })
    //         .then((response) => {
    //             if(response.ok) {
    //                 return response.json();
    //             }
    //             throw response;
    //         })
    //         .then((data) => {
    //             setAboutList(data.list);
    //         })
    //         .catch((error) => {
    //             setError(error);
    //         })
    //     }
    // }, [state.loading])

    const aboutList = [
        {
            icon: "school",
            sentence: "Studying Software Engineering at McMaster University"
        },
        {
            icon: "business",
            sentence: "Pursuing a Minor in Innovation along with my degree"
        },
        {
            icon: "work",
            sentence: "Completed 4 software internships, at SalonEverywhere, Signiant and Shopify"
        },
        {
            icon: "code",
            sentence: "Have experience developing full stack, mobile, graphics, AI projects and much more"
        },
        {
            icon: "emoji",
            sentence: "Constant learner, passionate about all things technology and software"
        },
        {
            icon: "check",
            sentence: "Proficient in wide variety of software languages and skills, check them out below:"
        },
    ]
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
                                    {listItem.sentence}   
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