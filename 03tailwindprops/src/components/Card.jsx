import React from 'react'

const Card = ({username = "No name", position="No assigned yet"}) => {
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://res.cloudinary.com/dbl4ugndy/image/upload/v1701306345/Imagen_de_WhatsApp_2023-11-29_a_las_19.04.54_e859a9e1_acgd5o.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {position}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card