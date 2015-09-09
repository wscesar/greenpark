<?php
    extract($_POST);
    date_default_timezone_set("Brazil/East");
    
    require 'smtp.php';
    // require 'save-contact.php';

    $smtp->host = 'mail.ituinformatica.com'; // smtp.myserver.com
    $smtp->user = 'teste@ituinformatica.com'; // myuser@myserver.com
    $smtp->pass = 'itu123456'; // mypop3password

    $msg = '<table>
                <tr>
                    <td>Olá, <b>'.strtoupper($name).'</b>, enviou uma mensagem pelo site.</td>
                </tr>

                <tr>
                    <td><b>Dados Pessoais</b></td>
                </tr>

                <tr>
                    <td><b>Contato:</b> '.$email.'</td>
                </tr>

                <tr>
                    <td><b>Mensagem:</b> "'.$msg.'"</td>
                </tr>

                <tr>
                    <td><font face="Arial" color="#505050">'.date('d/m/Y - H:i').'</font></td>
                </tr>
            </table>';


    // Send
    // $smtp->send('wscesar@gmail.com', 'testando envio', $msg)

    $success = $smtp->send('wscesar@gmail.com', 'Mensagem Enviada Por: '.strtoupper($name), $msg);

    // if( !$success ) {
    //     echo 'ok';
    // }else{
    //     echo "error";
    // }
    

?>