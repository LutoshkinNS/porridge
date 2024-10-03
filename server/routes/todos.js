import {routes} from "../helpers/routesMap.js";

export default (app) => {
    app.get(routes.todos(), (req, res) => {
        app.pg.query(
            'SELECT id, title, completed FROM tasks',
            function onResult (err, result) {
                res.send(err || result.rows)
            }
        )
    });

    app.post(routes.todoNew(), (req, res) => {
        const { title } = req.body;
        app.pg.query(
            'INSERT INTO tasks (title, completed) VALUES ($1, $2) RETURNING id, title, completed',
            [title, false],
            function onResult (err, result) {
                if (err) {
                    res.code(500).send(err);
                } else {
                    res.send(result.rows);
                }
            }
        );
    });

    app.delete(routes.todoDelete(':id'), (req, res) => {
        const { id } = req.body;
        app.pg.query(
            'DELETE FROM tasks WHERE id = $1',
            [id],
            function onResult (err, result) {
                if (err) {
                    res.code(500).send(err);
                } else {
                    res.sendStatus(204);
                }
            }
        );
    });
}