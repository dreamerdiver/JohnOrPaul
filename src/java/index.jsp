<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>John Or Paul</title>
        <link href="index.css" rel="stylesheet" type="text/css" />
        <!--<script type="text/javascript" src="morseCode.js"></script>-->
    </head>
    <body>
        <header>
            <h1>Morse Code Translator</h1>
        </header>

        <section id="userInput" >
            <form id="morseInputForm" action="morseCode.html#" autocomplete="off">
                <label for="singPlayDropdown">Which of the Beatles </label>
                    <select id="singPlayDropdown">
                        <option>wrote</option>
                        <option>sang</option>
                    </select>
                <label for="userString">Which of the Beatles </label>
                    <input type="text" id="userString" name="inputString" />
                <input type="submit" id="runQuery" name="submitButton" value="?"/>
            </form>
        </section>

        <div id="outputDiv"></div>

        <footer id="footer">
            <p>Created by: Mitch Gundrum</p>
            <script>
                init();
                var revisedDate = document.lastModified;
                document.write("Web page was last revised: " + revisedDate);
            </script>
        </footer>
    </body>
</html>