import React, { ChangeEvent, KeyboardEvent, useEffect } from 'react';
import { Container, Grid } from "@mui/material";
import Title from './components/Title';
import Button from './components/Button';
import Text from './components/Text';
import Adult from './components/Adult';
import Photo from './components/Photo';
import Counter from './components/Counter';
import Adder from './components/Adder';
import WelcomeName from './components/WelcomeName';
import ConditionalText from './components/ConditionalText';
import HiddenName from './components/HiddenName';
import TodoList from './components/TodoList';

const Test = (): JSX.Element => {
    useEffect(() => {
        alert("hello");
    }, []);
    const count = 1;
    const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key);
        if (event.key === 'h') {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    return (
        <div>
            <Title title='Title1!' subTitle='Subtitle1!' />
            <Title title='Title2!' />
            {count > 5 ? <Button name='Larger' /> : <Button name='Less' />}
            <Text text='h1 tag' type='header' />
            <Text text='strong tag' type='bold' />
            <Adult age={20} />
            <Adult age={19} />
            <Photo address='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' description='Google Logo' />
            <input
                type='text'
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    console.log(event.currentTarget.value)} />
            <br />
            <input type='text' onKeyDown={preventKeyDown} />
            <Counter defaultCount={0} />
            <Adder />
            <WelcomeName />
            <ConditionalText />
            <HiddenName />
            <TodoList />
            <Container style={{ backgroundColor: "#022fff" }}>
                <Grid container style={{ backgroundColor: "#ff2fff" }}>
                    <Grid item xs={12} md={6}>
                        xs-12 md-6
                    </Grid>
                    <Grid item xs={12} md={6}>
                        xs-12 md-6
                    </Grid>
                </Grid>
                <Grid container style={{ backgroundColor: "#ff9fff" }}>
                    <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
                        xs-6 md-3
                    </Grid>
                    <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
                        xs-6 md-3
                    </Grid>
                    <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
                        xs-6 md-3
                    </Grid>
                    <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
                        xs-6 md-3
                    </Grid>
                </Grid>
                <Grid container style={{ backgroundColor: "#ff9fff" }}>
                    <Grid item xs style={{ backgroundColor: "#ffff2f" }}>
                        xs-auto
                    </Grid>
                    <Grid item xs={4}>
                        xs-4
                    </Grid>
                    <Grid item xs style={{ backgroundColor: "#ffff2f" }}>
                        xs-auto
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default Test;