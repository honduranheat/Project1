$(document).on('ready', function () {
    $(document).on("click", ".upVote", addScore);


    function addScore(event) {
        var updatedScore = $(this).data("score");
        if (event.which === 13) {
            updatedTodo = $(this).data("score").val().trim() + 1;
            $(this).blur();
            updateScore(update);
        }

    };

    function updateScore(update) {
        $.ajax({
            method: "PUT",
            url: "/api/recipes",
            data: todo
        }).then(
            res.redirect('allrecipes')
        );
    };





})