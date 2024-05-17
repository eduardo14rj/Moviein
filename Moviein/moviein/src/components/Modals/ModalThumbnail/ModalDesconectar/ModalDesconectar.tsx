import Button from 'components/Button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from 'components/ui/dialog';
import React from 'react';

const ModalDesconectar: React.FC = () => {

    function desconectar() {
        localStorage.clear();
    }

    return (
        <>
        <Dialog>
            <DialogTrigger asChild>
                <Button titulo="Deslogar"
                    color="outline-white"
                    className="w-full" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Desconectar?</DialogTitle>
                    <div>
                        Deseja mesmo deslogar da conta?
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        titulo="Fechar"
                        color="outline-white"
                        />
                    <Button
                        titulo="Sair da plataforma"
                        color="red"
                        onClick={() => desconectar()}
                        />
                </DialogFooter>
            </DialogContent>
        </Dialog>
                        </>
    );
}

export default ModalDesconectar;