function Projetos() {

  const projetos = [
    {
      nome: "Portfólio React",
      descricao: "Meu primeiro projeto em React publicado na Vercel"
    },
    {
      nome: "Projeto Sustentável",
      descricao: "Aplicação acadêmica sobre sustentabilidade"
    }
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((proj, index) => (
        <div key={index}>
          <h3>{proj.nome}</h3>
          <p>{proj.descricao}</p>
        </div>
      ))}

    </section>
  );
}

export default Projetos;
