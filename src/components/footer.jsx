import './footer.css'


const Footer = () => {
  let currentYear = new Date().getFullYear();
  return(
  <div>
    <footer className = "footer">
    <div className = "footer_copyright"><p>{"©" + currentYear} Jersey Review.com.</p></div>
    <div className="socialMedia">
    <p><img  src="https://drive.google.com/uc?          export=view&id=1Z4UmrfwgYuWePhdWp40MbbFczjFtXehv" alt=""/></p>
    <p><img  src="https://drive.google.com/uc?export=view&id=1uoPJrlDzX7SeXMTXufJTQZDtDJmN8RgR" alt=""/></p>
    <p><img  src="https://drive.google.com/uc?export=view&id=1RL_JElcMi9jRcKyn-WfFQIHeuf_6rzOh" alt=""/></p>
    </div>
  </footer>
</div>
  
  )
}

export default Footer;