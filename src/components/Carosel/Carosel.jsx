import React from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';



// function Carosel() {
//   const handleDragStart = (e) => e.preventDefault();
//   const items = [
//     <div className='image'><img src="https://japan.tommy.com/img/item/DM17783000/DM17783000_cPJ4_a001_px.jpg" onDragStart={handleDragStart} role="presentation" /></div>,
//     <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//     <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//     <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//     <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   ];
  
//   return (
//     <AliceCarousel mouseTracking items={items} />
    
    
//   );
// }
// export default Carosel

  // <div class="container7">
// //   <div class="container-xl">
// //     <div class="row">
// //       <div class="col-md-10 mx-auto">
// //         <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
// //         {/* <!-- Carousel indicators --> */}
// //         <ol class="carousel-indicators">
// //           <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
// //           <li data-target="#myCarousel" data-slide-to="1"></li>
// //           <li data-target="#myCarousel" data-slide-to="2"></li>
// //         </ol>   
// //         {/* <!-- Wrapper for carousel items --> */}
// //         <div class="carousel-inner">
// //           <div class="carousel-item active">
// //             <div class="row">
// //               <div class="col-sm-4">
// //                 <div class="thumb-wrapper">
// //                   <div class="img-box">
// //                     <img src="" alt="" />
// //                   </div>
// //                   <div class="thumb-content">
// //                     <a href="#">オーバーサイズTシャツ <i class="fa fa-angle-right"></i></a>
// //                     <p>¥1,999</p>
// //                   </div>						
// //                 </div>
// //               </div>
// //               <div class="col-sm-4">
// //                 <div class="thumb-wrapper">
// //                   <div class="img-box">
// //                     <img src="" alt="" />
// //                   </div>
// //                   <div class="thumb-content">
// //                     <a href="#">オーバーサイズ プリントトップス <i class="fa fa-angle-right"></i></a>
// //                     <p>¥1,999</p>
// //                   </div>				
// //                 </div>
// //               </div>				
// //               <div class="col-sm-4">
// //                 <div class="thumb-wrapper">
// //                   <div class="img-box">
// //                     <img src="" alt="" />
// //                   </div>
// //                   <div class="thumb-content">
// //                     <a href="#">オーバーサイズTシャツ <i class="fa fa-angle-right"></i></a>
// //                     <p>¥2,999</p>
// //                   </div>				
// //                 </div>					
// //               </div>
// //             </div>
// //           </div>
// //           <div class="carousel-item">
// //             <div class="row">
// //               <div class="col-sm-4">
// //                 <div class="thumb-wrapper">
// //                   <div class="img-box">
// //                     <img src="]" alt="" />
// //                   </div>
// //                   <div class="thumb-content">
// //                     <a href="#">キャップ <i class="fa fa-angle-right"></i></a>
// //                     <p>¥999</p>
// //                   </div>				
// //                 </div>
// //               </div>
// //               <div class="col-sm-4">
// //                 <div class="thumb-wrapper">
// //                   <div class="img-box">
// //                     <img src="" alt="" />
// //                   </div>
// //                   <div class="thumb-content">
// //                     <a href="#">リボンヘアクリップ <i class="fa fa-angle-right"></i></a>
// //                     <p>¥1,299</p>
// //                   </div>		
// //                 </div>
// //               </div>
// //               <div class="col-sm-4">
// //                 <div class="img-box">
// //                   <img src="" alt="" />
// //                 </div>
// //                 <div class="thumb-content">
// //                   <a href="#">リング 9個セット <i class="fa fa-angle-right"></i></a>
               
// //                   <p>¥2,999</p>
// //                 </div>			
            
// //             </div>
// //           </div>
// //         </div>
// //         {/* <!-- Carousel controls --> */}
// //         <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
// //           <i class="fa fa-angle-left"></i>
// //         </a>
// //         <a class="carousel-control-next" href="#myCarousel" data-slide="next">
// //           <i class="fa fa-angle-right"></i>
// //         </a>
// //       </div>
// //       </div>
// //     </div>
// //   </div>
// // </div>
// // </div>			
   
function Carosel() {

    
    return (
      <div class="container7">
     <div class="container-xl">
           <div class="row">
             <div class="col-md-10 mx-auto">
               <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
               {/* <!-- Carousel indicators --> */}
               <ol class="carousel-indicators">
                 <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                 <li data-target="#myCarousel" data-slide-to="1"></li>
                 <li data-target="#myCarousel" data-slide-to="2"></li>
               </ol>   
               {/* <!-- Wrapper for carousel items --> */}
               <div class="carousel-inner">
                 <div class="carousel-item active">
                   <div class="row">
                     <div class="col-sm-4">
                       <div class="thumb-wrapper">
                         <div class="img-box">
                           <img src="" alt="" />
                         </div>
                         <div class="thumb-content">
                           <a href="#">オーバーサイズTシャツ <i class="fa fa-angle-right"></i></a>
                           <p>¥1,999</p>
                         </div>						
                       </div>
                     </div>
                     <div class="col-sm-4">
                       <div class="thumb-wrapper">
                         <div class="img-box">
                           <img src="" alt="" />
                         </div>
                         <div class="thumb-content">
                           <a href="#">オーバーサイズ プリントトップス <i class="fa fa-angle-right"></i></a>
                           <p>¥1,999</p>
                         </div>				
                       </div>
                     </div>				
                     <div class="col-sm-4">
                       <div class="thumb-wrapper">
                         <div class="img-box">
                           <img src="" alt="" />
                         </div>
                         <div class="thumb-content">
                           <a href="#">オーバーサイズTシャツ <i class="fa fa-angle-right"></i></a>
                           <p>¥2,999</p>
                         </div>				
                       </div>					
                     </div>
                   </div>
                 </div>
                 <div class="carousel-item">
                   <div class="row">
                     <div class="col-sm-4">
                       <div class="thumb-wrapper">
                         <div class="img-box">
                           <img src="]" alt="" />
                         </div>
                         <div class="thumb-content">
                           <a href="#">キャップ <i class="fa fa-angle-right"></i></a>
                           <p>¥999</p>
                         </div>				
                       </div>
                     </div>
                     <div class="col-sm-4">
                       <div class="thumb-wrapper">
                         <div class="img-box">
                           <img src="" alt="" />
                         </div>
                         <div class="thumb-content">
                           <a href="#">リボンヘアクリップ <i class="fa fa-angle-right"></i></a>
                           <p>¥1,299</p>
                         </div>		
                       </div>
                     </div>
                     <div class="col-sm-4">
                       <div class="img-box">
                         <img src="" alt="" />
                       </div>
                       <div class="thumb-content">
                         <a href="#">リング 9個セット <i class="fa fa-angle-right"></i></a>
                     
                         <p>¥2,999</p>
                       </div>			
                  
                   </div>
                 </div>
               </div>
               {/* <!-- Carousel controls --> */}
               <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                 <i class="fa fa-angle-left"></i>
               </a>
               <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                 <i class="fa fa-angle-right"></i>
               </a>
             </div>
             </div>
           </div>
         </div>
       </div>
       </div>			
   
      
    );
  }
  export default Carosel


