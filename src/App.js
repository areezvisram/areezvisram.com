import React, { useEffect } from 'react';
import BaseContainer from './containers/BaseContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  //const state = useSelector((state) => state.tokenReducer);

  useEffect(() => {
    dispatch(fetchToken());
  },[dispatch])

  //console.log(state);

  return (
    <div>        
      <BaseContainer/>
    </div>
  )

}

export default App;