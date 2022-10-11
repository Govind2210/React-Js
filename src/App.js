import './App.css';
import PropsFunc from './Componrnts1/PropsFunc';
import InputFunc from './Componrnts1/inputFunc';
import FunctionRef from './Componrnts1/functionRef';
import HideAndShow from './Componrnts1/HideAndShow';
import FormHandle from './Componrnts1/FormHandle';
import ConditionRender from './Componrnts1/ConditionRender';
import PassFuncAsProps from './Componrnts1/PassFuncAsProps';
import Useeffect from './Componrnts1/Useeffect';
import StyleReact from './Componrnts1/StyleReact';
import Bootstrap from './Componrnts1/Bootstrap';
import HandleArray from './Componrnts1/HandleArray';
import BootstarpUniquekey from './Componrnts1/BootstarpUniquekey';
import NestedListWithArray from './Componrnts1/NestedListWithArray';
import Reuse from './Componrnts1/Reuse';
import UserParent from './Components2/UserParent';
import UseMemo from './Components2/UseMemo';
import UseRef from './Components2/UseRef';
import ForwardRef01 from './Components2/ForwardRef01';
import ControlledCom from './Components2/ControlledCom';
import UncontrolledCom from './Components2/UncontrolledCom';
import HighrOrderFunc from './HighOrderComponent/HighrOrderFunc';
import DynamicRouting from './Components2/DynamicRouting';
import CallApi from './Components3/CallApi';
import PostApi from './Components3/PostApi';
import PreviousState from './Components3/PreviousState';
import ContextApi from './ComponentContextApi/ContextApi';




function App() {
  const getAlert = ()=>{
    alert("this is from app")
  }

  return (
    <>
      {/* this is how we send props */}
      {/* <PropsFunc name={'Govind'} email="govind.lowanshi28@gamil.com" others={{address:"khoploi" , mobile:"564786"}}/> */}
      {/* <PropsFunc name={'aditi'} email="aditi.lowanshi28@gamil.com" others={{address:"khoploi" , mobile:"143"}}/> */}
      {/* <InputFunc/> */}
      {/* <HideAndShow/> */}
      {/* <FormHandle/> */}
      {/* <ConditionRender/> */}
      {/* <PassFuncAsProps data={getAlert}/> */}
      {/* <FunctionRef/> */}
      {/* <Useeffect/> */}
      {/* <StyleReact/> */}
      {/* <Bootstrap/> */}
      {/* <HandleArray/> */}
      {/* <BootstarpUniquekey/> */}
      {/* <NestedListWithArray/> */}
      {/* <Reuse/> */}
      {/* <UserParent/> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
      {/* <ForwardRef01/> */}
      {/* <ControlledCom/> */}
      {/* <UncontrolledCom/> */}
      {/* <HighrOrderFunc/> */}
      {/* <DynamicRouting/> */}
      {/* <CallApi/> */}
      {/* <PostApi/> */}
      {/* <PreviousState/> */}
      <ContextApi/>

    </>
  );
}

export default App;
