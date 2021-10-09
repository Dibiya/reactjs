function Header(){
    return (
        <div class="flex flex-col">

         <header class="p-4 bg-gray-400">
     
          
          <div class="container mx-auto">
          <div class="sm:flex justify-around">
            
            <ul 
              class="text-black-400 sm:self-center text-xl border-t sm:border-none"
            >
              <li class="sm:inline-block">
                  <a href="#" class="p-3 hover:text-white">HOME</a>
              </li>
              <li class="sm:inline-block">
                  <a href="#" class="p-3 hover:text-white">WEB</a>
              </li>
              <li class="sm:inline-block">
                  <a href="#" class="p-3 hover:text-white">PROGRAM</a>
              </li>
              <li class="sm:inline-block">
                  <a href="#" class="p-3 hover:text-white">ABOUT</a>
              </li>
              <li class="sm:inline-block">
                  <a href="#" class="p-3 hover:text-white">RESUME</a>
              </li>
             </ul>
             </div>
             </div>  
          
        
          
           
           </header>
        </div>
    )   
}

export default Header;