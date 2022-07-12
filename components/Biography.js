import React from 'react';

export default function Biography () {
    return (
        <div className="flex flex-col lg:flex-row gap-4 my-5">
            <div className="flex-1">
                <h2 className="text-3xl lg:text-5xl custom-box-shadow inline-block mb-6">
                    Biography
                </h2>
                <p className="text-md lg:text-lg text-justify p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus a deserunt! Culpa, praesentium atque suscipit molestiae repudiandae laudantium ad velit eum libero. Tenetur, 
                    inventore dolor assumenda quod iure enim vitae eius reprehenderit vel officia dolores. Esse ea, amet inventore quod repudiandae ad! Quibusdam, praesentium velit tempora ab, odio odit
                     molestiae aspernatur, fuga sit quisquam ut laborum dicta quos sint quam? Qui tempore voluptate dicta labore nesciunt, minus dolores, magni sint itaque, numquam officiis beatae.
                      Aliquid similique a, impedit tenetur velit vitae dolores placeat nam soluta maiores! Unde explicabo deleniti, quas amet suscipit id commodi ratione odit cum possimus voluptas 
                      obcaecati iste nulla omnis adipisci! Vero culpa, ullam distinctio voluptate, soluta explicabo id quibusdam sint corporis porro veritatis. Deleniti quasi fuga dignissimos ducimus
                       facilis accusamus quas autem libero, aliquid nihil odit iste alias impedit quo unde dicta laudantium! Reprehenderit vel facilis eos voluptatem vero minima iure sit dicta 
                       architecto voluptate sunt ea nobis, laboriosam veniam numquam quo, expedita minus quas nam eius, possimus unde. Eum, iure doloremque adipisci earum, itaque sed labore 
                       voluptatibus perferendis aliquid odio, maxime autem id aliquam consequuntur. Quae, harum quam? Dolorem quos, reprehenderit dolorum optio porro sit ipsum cupiditate? 
                       Amet suscipit veniam vero omnis voluptatem ducimus!</p>
            </div>
            <div className="flex flex-1 items-center justify-center relative m-3">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white rounded-3xl border-8 border-blue-600"></div>
                <div className="absolute top-3 right-3 w-10 h-10 bg-white rotate-45 border-4 border-blue-600"></div>
                <img src="./images/sheik Adam.jpg" alt="mudir" className="rounded-xl -scale-x-100 w-3/4 h-3/4 z-50" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white rounded-3xl border-8 border-blue-600"></div>
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rotate-45 border-4 border-blue-600"></div>
            </div>
        </div>
    )
}