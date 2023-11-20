// Footer.js
import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';
import { useState } from 'react'
import getData from '../../utils/getData';

function Footer() {
    //create a state for loaded
    const [loaded, setLoaded] = useState(false);

    //create a state for footerObject
    const [footer, setFooterObj] = useState();

    const fetchFooter = async () => {
        //call helper function that fetches the data from the api
        getData('footer/')
            .then((json) => {
                //when data is loaded set loaded to true
                setLoaded(true);
                //populate footerObj
                setFooterObj(json);
            })
    };

    //go get the data
    React.useEffect(() => {
        //go call my getData
        fetchFooter();
    }, []);

    //show loading when we don't have data yet
    if (!loaded) return (
        <>
            <h1>Footer</h1>
            <h2>Loading...</h2>
        </>
    );

    return (
        <Segment inverted vertical style={{ padding: '5em 0' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header inverted as='h4' content={footer.social.title} />
                            <List link inverted>
                                <List.Item as='a' href={footer.social.twitter} target='_blank'>
                                    Twitter
                                </List.Item>
                                <List.Item as='a' href={footer.social.facebook} target='_blank'>
                                    Facebook
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header inverted as='h4' content='Quick Links' />
                            <List link inverted>
                                {footer.quickLinks.map((link, index) => (
                                    <List.Item key={index} as='a' href={link.href} target='_blank'>
                                        {link.title}
                                    </List.Item>
                                ))}
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    );
};

export default Footer;
