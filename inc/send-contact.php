<?php
    extract($_POST);
    date_default_timezone_set("Brazil/East");
    
    require 'smtp.php';
    require 'save-contact.php';

    $smtp->host = 'smtp.greenparksalto.com.br';
    $smtp->user = 'greenpark@greenparksalto.com.br';
    $smtp->pass = 'bLupr1nt';

    $msg = '<table>
                <tr>
                    <td>Olá, <b>'.strtoupper($name).'</b>, enviou uma mensagem pelo site.</td>
                </tr>

                <tr>
                    <td><b>Dados Pessoais</b></td>
                </tr>

                <tr>
                    <td><b>Contato:</b> '.$phone.'</td>
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
    // $success = $smtp->send('wscesar@gmail.com', 'Email teste site Greenpark', $msg);
    // $success = $smtp->send('greenpark@greenparksalto.com.br', strtoupper($name).' enviou uma mensagem pelo site Greenpark: ', $msg);
    $success = $smtp->send('contato@teamprime.com.br', 'Mensagem Enviada Por: '.strtoupper($name), $msg);

    if( !$success ) {
        echo 'ok';
    }else{
        echo "error";
    }
    

?>