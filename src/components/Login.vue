<template>
    <div class="vue-template">
            <!-- Formulaire de connexion -->
        <form>
            <h3>Connexion</h3>
                <!-- Login -->
            <div class="form-group">
                <label>Login</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
                <!-- Password -->
            <div class="form-group">
                <label>Mot de passe</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
                <!-- Boutton Valider -->
            <button type="submit" class="btn btn-dark btn-lg btn-lock">Valider</button>
                <!-- Mot de passe oublié -->
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
            </p>
                <!-- Liens réseaux sociaux -->
            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    }
}
</script>