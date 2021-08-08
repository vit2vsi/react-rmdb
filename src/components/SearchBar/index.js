import React,{useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
//image
import searchIcon from '../../images/search-icon.svg'
//styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({setSearchTerm}) => {
  const [state , setState] = useState('');
  const inital = useRef(true);



  useEffect( ()=>{
    if(inital.current){
      inital.current =false;
      return;
    }
    const timmer = setTimeout(()=>{
      setSearchTerm(state);
    },500)
    return ()=> clearTimeout(timmer)
  },[setSearchTerm,state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input 
          type='text' 
          placeholder='Search Movie'
          onChange={event=>setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  )
}

// SearchBar.propTypes = {
//   setSearchTerm: PropTypes.string,
  
// };


export default SearchBar
