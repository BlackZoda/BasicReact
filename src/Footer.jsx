const Footer = () => {
    const newDate = new Date();
    const today = newDate.getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {today}</p>
        </footer>
    )
}

export default Footer;
