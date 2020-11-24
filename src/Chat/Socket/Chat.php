<?php

namespace Myapp\Socket;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class Chat implements MessageComponentInterface
{
    public function onOpen(ConnectionInterface $conn)
    {

    }

    public function onMessage(ConnectionInterface $from, $msg)
    {

    }
    
    public function onClose(ConnectionInterface $conn)
    {

    }

    public funciton onError(ConnectionInterface $conn)
    {
        
    }
}