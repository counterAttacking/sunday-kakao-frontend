import React, { ChangeEvent, KeyboardEvent, useEffect } from 'react';
import './App.css';
import Button from './Button';
import Text from './Text';
import Title from './Title';
import Adult from './Adult';
import Photo from './Photo';
import Counter from './Counter';
import Adder from './Adder';
import WelcomeName from './WelcomeName';
import ConditionalText from './ConditionalText';
import HiddenName from './HiddenName';
import TodoList from './TodoList';

const App = (): JSX.Element => {
  // useEffect(() => {
  //   alert("hello");
  // }, []);
  const count = 1;
  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === 'h') {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
