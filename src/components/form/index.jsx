import { useForm } from "react-hook-form";

const ContactForm = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (
    
      <div>
        <h1 className="text-center formu main-title">DEJANOS UN MENSAJE</h1>
         <div className="container contacto">
        <form className="formulario" onSubmit={handleSubmit(enviar)}>
            <h2 className="form-titulo main-title">Contacto</h2>
            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            <input type="text" placeholder="Escribe tu mensaje" {...register("mensaje")} />

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>

    </div>
  )
}

export default ContactForm