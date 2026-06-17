import Conditional_Rendering from "./topics/conditional_rendering/Conditional_Rendering"
import Fragments_Concept from "./topics/fragments/Fragments_Concept"
import UseStateHook from "./topics/hooks/usestatehook/UseStateHook"
import UseStateHookTask from "./topics/hooks/usestatehook/UseStateHookTask"

import Jsx_Expression from "./topics/jsx_expression/Jsx_Expression"
import Jsx_Rules from "./topics/jsx_expression/Jsx_Rules"
import Props_Home from "./topics/props/Props_Home"
import Props_With_Conditional from "./topics/props_conditional_rendering/Props_With_Conditional"


const App=()=>{
    
    return(
        <div id="App">
            {/* <Jsx_Expression/> */}
            {/* <Jsx_Rules/> */}
            {/* <Props_Home/> */}
            {/* <Conditional_Rendering/> */}
            {/* <Props_With_Conditional/> */}
            {/* <Fragments_Concept/> */}
            {/* <UseStateHook/> */}
            <UseStateHookTask/>
        </div>
    )
}
export default App