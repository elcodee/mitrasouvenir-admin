import { AiOutlineHeart } from "react-icons/ai";

export default function Footer(){
    return(
        <>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© 2022 Mitra Souvenir.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Crafted with <AiOutlineHeart /> by
                  <a
                    href="/"
                    target="_blank"
                    className="text-reset"
                  >
                    Elcode
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}