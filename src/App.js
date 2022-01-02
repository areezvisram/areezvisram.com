import React, { useEffect } from 'react';
import BaseContainer from './containers/BaseContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(fetchToken());
  },[dispatch])  

  return (
    <div>        
      <BaseContainer/>
    </div>
  )

}

export default App;