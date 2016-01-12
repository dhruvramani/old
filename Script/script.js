$("document").ready(function ()
{
    var foo=" ~ ";
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))) {
        particlesJS('About', {
        particles: {
            color: '#fff',
            shape: 'circle', 
            opacity: 0.5,
            size: 2,
            size_random: true,
            nb: 200,
            line_linked: {
                enable_auto: true,
                distance: 230,
                color: '#fff',
                opacity: 0.6,
                width: 1,
                condensed_mode: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 600
                }
            },
            anim: {
                enable: true,
                speed: 2.5
            }
        },
        interactivity: {
        enable: false,
        mouse: {
        distance: 150
        },
    detect_on: 'canvas', 
    mode: 'grab'
        },
            
            retina_detect: false
        });
 
    }


$('#terminal').terminal(function(command, term) {
    var arr=command.trim().split(" "),
        directories=["About","Tech-Skills","Projects","Contact"];
        text=['Name : Dhruv Ramani\nDOB  : November 23 1998\n\nI build things. Mostly during camping in front of the screen for a real long time. And sometimes, with a Soldering Iron in hand. I have been programming\nsince the age of 14 and tinkering with electronics since the age of 13. The fascination for computers has been since I was in 1st grade, when I got my first\ncomputer as a birthday gift.I am also a member of GDG Kuwait, which is one of the most active GDG in the Middle East and have interned under an entrepreneur\nduring Google Startup Weekend-Kuwait.\n\nTags : | All Things Tech | , | Stack Overflow | , | Open-Source | , | Quora | , | Food | , | Music | , | Swimming |',
        'Design Skills         : HTML CSS Hype Editor\nProgramming Languages : JavaScript Python C C++ Java PHP Ruby Swift Shell SQL\nFrameworks            : jQuery Bootstrap',
        'Electronics : 2 Bit Computer, Vocal Remover\nProgramming : Zen Pencils Crawller, Misc. iOS Apps, Car Game For Command Line',
        'Stack Overflow : https://stackoverflow.com/users/4534903/dhruv-ramani\nGithub         : https://github.com/dhruvramani\nFacebook       : https://www.facebook.com/dhruv.ramani\nInstagram      : https://www.instagram.com/memeifier\nTwitter        : https://twitter.com/dhruvRamani98\nMail           : dhruvramani98@gmail.com'];

    switch(arr[0].toString().toLowerCase()){
        case 'help':
            term.echo("help            : Displays This Menu\nls              : List Directory Contents\ncd              : Change Directory\nview __filename : View the contents of __filename\nhtml __name     : Go to the respective section on this page\nclear           : Clear the screen\nblog            : Open Blog\n\n\n&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608; All of the parameters to commands are case sensitive &#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;\n");
            break;
        case 'ls':
            if(arr[1]!=null)
                if(directories.indexOf(arr[1]) > -1 && foo == ' ~ ')
                    term.echo(arr[1]+'.txt\n');
                else
                    term.echo("ls: no such file or directory: "+arr[1]+"\nUsage : ls __dirname     : List Directory Contents\n");
            else if(foo==' ~ ')
                term.echo(directories.join("\t")+"\n");
            else
                term.echo(foo+".txt\n");
            break;
        case 'cd':
            if(arr[1]!=null)
                if(arr[1]=="~" || arr[1]=="..")
                    foo=' ~ ';
                else if(directories.indexOf(arr[1]) > -1 && foo== ' ~ ')
                    foo=arr[1];
                else                    
                    term.echo("cd: no such file or directory: "+arr[1]+"\n");     
            else
               foo=' ~ '
            break;
        case 'html':
            if(arr[1]!=null)
              if(directories.indexOf(arr[1]) == -1)
                    term.echo("html: no such section : "+arr[1]+"\nLook at the navigation bar for the sections.\n");     
                else
                {  
                    $("#"+arr[1]).get(0).scrollIntoView();
                    arr[1]="";
                }
            else
               term.echo('Usage : html __name     : Go to the respective section on this page\n');
            break;
        case 'view':
            if(arr[1]!=null)
            {
                var input=arr[1].split(".");    
                if(directories.indexOf(input[0]) > -1 && input[1] == 'txt' && foo==input[0])
                    term.echo("\n&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608; "+arr[1]+" &#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;\n\n"+text[directories.indexOf(input[0])]+"\n");
                else
                    term.echo("view: no such file : "+arr[1]+"\nUsage : view __filename : View the contents of __filename\n");
            } else 
                term.echo("Usage : view __filename : View the contents of __filename\n");
            break;
        case 'blog':
            term.echo('Opening Blog...\n');
            setTimeout(function(){                
                window.location.href='https://dhruvramani.github.io/Blog';
            },1000);
            break;
        default: 
            term.echo("sh: command not found: "+arr[0]);
    }
    $(".prompt").html('&rarr; '+foo+'&nbsp');
   }, { prompt: '&rarr; ~ ', name: 'test' });
    $(".terminal-output").html("Type \"help\" for more information.");
    $("#Contact br").addClass('hidden-xs');
});
