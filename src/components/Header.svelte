<script>
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem
    } from 'sveltestrap';

    import {link} from "svelte-spa-router"
    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
</script>

<Navbar color="light" light expand="md" style="height: 50px">
    <NavbarBrand href="/">sveltestrap API Films</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ml-auto" navbar>
            <NavItem>
                <a href="/films"  use:link class="navbar-brand" >Films</a>
            </NavItem>
            <NavItem>
                <a href="/about" use:link class="navbar-brand">About</a>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>