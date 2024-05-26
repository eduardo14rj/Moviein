import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from 'components/ui/button';
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
                    <Button
                        color="outline-white"
                        className="w-full">
                        Deslogar
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Desconectar?</DialogTitle>
                        <div>
                            Deseja mesmo deslogar da conta?
                        </div>
                    </DialogHeader>
                    <DialogFooter>
                        <>
                            <DialogClose>
                                <Button color="outline-white">
                                    Fechar
                                </Button>
                            </DialogClose>
                            <Button color="red" onClick={() => desconectar()}>
                                Sair da plataforma
                            </Button>
                        </>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ModalDesconectar;