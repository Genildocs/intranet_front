import React from 'react';

export default function CreatePost() {
  return (
    <div>
      <label htmlFor="title">Titulo</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Digite o título"
      />
      <label htmlFor="body">Conteúdo</label>
      <textarea
        id="body"
        name="body"
        placeholder="Digite o conteúdo"
      ></textarea>
      <button type="submit">Criar Post</button>
    </div>
  );
}
