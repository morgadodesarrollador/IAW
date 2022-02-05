<table border=1>
    <tr>
        <td>Id Editor</td>
        <td>Nombre Editorial</td>
    </tr>
    <?php foreach($editores as $editor): ?>
    <tr>
        <td>
            <a href="http://peliculas.test/api/admin/libros/<?php echo $editor['editorid']; ?>/<?php echo $editor['nombreeditorial']; ?>">
                <?php echo $editor['editorid']; ?>
            </a>

        </td>
        <td>
            <a href="http://peliculas.test/api/admin/libros/4/morgado?codigo=<?php echo $editor['editorid']; ?>&name=<?php echo $editor['nombreeditorial']; ?>">
                <?php echo $editor['nombreeditorial']; ?>
            </a>    
        </td>
    </tr>
    <?php endforeach ?>
</table>