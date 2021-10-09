function Footer(){
    return (
        <div class="flex flex-col ">


            <footer class="p-4 bg-gray-400">

             <div class="container  mx-auto">
             <div class="row">

             <div class="col-md-8 col-sm-6 col-xs-12">
             <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
             <a href="#">Scanfcode</a>
             </p>
             </div>

             <div class="col-md-4 col-sm-6 col-xs-12">
             <ul class="social-icons">
              <li class="sm:inline-block"><a class="facebook " href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i style={{color:'white'}} class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
              </ul>
             </div>
              </div>
              </div>
            
             </footer>

        </div>
    )
}

export default Footer;