import { Routes, Route, Navigate } from 'react-router-dom';

export function AppRoutes () {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<p>Pag. Inicial</p>}/>
      <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
    </Routes>
  );
};