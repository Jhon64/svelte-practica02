import Home from "../pages/Home.svelte"
import About from "../pages/About.svelte"
import Films from "../pages/Films.svelte"
import notFound from "../pages/NotFound.svelte"
const routes={
    '/':Home,
    '/about':About,
    '/films':Films,
    '*':notFound
}

export default  routes;