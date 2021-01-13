import Home from './routes/Home.svelte';
import GymForm from './components/GymForm/GymForm.svelte';
import About from './routes/About.svelte';
import ptForm from './components/PtForm/PtForm.svelte';
import NotFound from './routes/NotFound.svelte';

// Export the route definition object
export default {
    // Exact path - Landing page
    '/': Home,
    '/About' : About,
    '/gymRegister' : GymForm,
    '/professionalRegister' : ptForm,
    '*': NotFound,
    /*
    // Using named parameters, with last being optional
    '/hello/:first/:last?': Name,

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    '/wild': Wild,
    '/wild/*': Wild,
    */
    // Catch-all, must be last
    
}