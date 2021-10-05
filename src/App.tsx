import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Layout/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Body from './Layout/Body/Body';

/**
 * 유저정보
 */
interface User {
  id: number,
  name: string,
  age: number,
  address: string,
  sex: string,
  created: string
}


function App() {

  /**
    * 이름
    */
  const [name, setName] = useState<string>('');

  /**
   * 나이
   */
  const [age, setAge] = useState<number>(0);

  /**
    * 주소
    */
  const [address, setAddress] = useState<string>('');

  /**
    * 성별
    */
  const [sex, setSex] = useState<string>('');

  /**
   * 유저 목록
   */
  const [users, setUsers] = useState<Array<User>>([]);

  /**
   * 유저 식별자
   */
  const [userId, setUserId] = useState<number>(0);

  /**
   * 리액트 훅
   */
  useEffect(() => {
    init();
  }, [])

  /**
   * 초기화한다.
   */
  const init = (): void => {
    fetch('http://localhost:3200/board', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Body></Body>
      </BrowserRouter>
    </div >
  );
}

export default App;
